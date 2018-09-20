import { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateEndpoint } from "redux-json-api";
import set from "lodash.set";
import deepExtend from "deep-extend";

import { Drupal } from "../utils";

class EditableEntityPresentational extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      data: PropTypes.object
    }),
    children: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  static defaultProps = {
    data: null
  };

  state = {
    entityWithChanges: null,
    entityChanges: null,
    saving: false
  };

  /**
   * Update the local state from any new entity data passed in as a prop.
   *
   * @param {object} props Component props
   * @param {props} state Local component state
   * @return {object} state
   */
  static getDerivedStateFromProps({ data }, { entityChanges }) {
    return {
      entityWithChanges: entityChanges ? deepExtend(data, entityChanges) : data
    };
  }

  /**
   * Handle a change event from an input element
   *
   * @param {SyntheticEvent} evt The change event
   * @return {Promise<void>} Resolved when the entity was changed
   */
  handleChange = async ({
    target: {
      value: propValue,
      dataset: { dataPropPath: propPath }
    }
  }) => {
    if (!propPath) {
      throw new Error(
        "No data-prop-path was set on the input element! This change operation failed!"
      );
    }
    return this.change(propPath, propValue);
  };

  /**
   * Handle a change event from an input element and save eventually
   *
   * @param {SyntheticEvent} evt The change event
   * @return {Promise<void>} Resolved when the entity was saved
   */
  handleChangeAndSave = async evt =>
    this.handleChange(evt).then(Drupal.debounce(() => this.save(), 500));

  /**
   * setState but it's a promise
   *
   * @param {any} state The parameter passed to setState
   * @return {Promise<void>} Resolved when the state was updated
   */
  async _setState(state) {
    return new Promise(res => this.setState(state, res));
  }

  /**
   * Change the entity without saving it
   *
   * @param {string} propPath The dot path to the property to change
   * @param {any} propValue The value to set the field property to
   * @return {Promise<void>} Promise resolved after the state is updated
   */
  async change(propPath, propValue) {
    return this._setState(({ entityChanges: oldEntityChanges }, { data }) => {
      const entityChanges = set(oldEntityChanges || {}, propPath, propValue);
      return {
        entityChanges,
        entityWithChanges: deepExtend(data, entityChanges)
      };
    });
  }

  /**
   * Actually the locally cached changes to the remote endpoint.
   *
   * @return {Promise<void>} Resolved when the entity was updated
   */
  async save() {
    const {
      dispatch,
      data: { id, type }
    } = this.props;
    const { entityChanges } = this.state;
    try {
      await this._setState({ saving: true });
      await dispatch(
        updateEndpoint({
          id,
          type,
          ...entityChanges
        })
      );
      await this._setState({
        entityChanges: null,
        entityWithChanges: null,
        saving: false
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      await this._setState({
        saving: false
      });
    }
  }

  render() {
    const { children } = this.props;
    const { entityWithChanges, saving } = this.state;

    return children({
      change: this.change,
      save: this.save,
      handleChange: this.handleChange,
      handleChangeAndSave: this.handleChangeAndSave,
      dataWithChanges: entityWithChanges,
      saving
    });
  }
}

export const EditableEntity = connect()(EditableEntityPresentational);
