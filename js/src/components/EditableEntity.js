import { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateResource } from "redux-json-api";
import set from "immutable-set";
import get from "lodash.get";
import debounce from "lodash.debounce";

import { apiEndpointConstructor } from "../utils";

export class EditableEntityPresentational extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      data: PropTypes.object
    }),
    children: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  static defaultProps = { data: null };

  state = { changes: null, saving: false, error: null };

  /**
   * Cached version of a debounced save function
   *
   * @private
   */
  debouncedSave = null;

  constructor(props) {
    super(props);

    this.debouncedSave = debounce(this.save, 1000);
  }

  /**
   * Get the data at a specific path. This method tries to resolve the path to
   * any local changes that are applied, and if there are none it uses the
   * original entity data.
   *
   * @param {string} propPath The address of the property to access
   * @param {any} def The default value to return if nothing was found
   * @return {any} The value at that address or the default
   */
  getData = (propPath, def) => {
    const { changes } = this.state;
    const { data } = this.props;
    return get(changes, propPath) || get(data, propPath, def);
  };

  /**
   * Get the whole entity with changes applied
   *
   * @return {object} The entity with changes applied
   */
  getAllData = () => {
    const { data } = this.props;
    return this._applyChanges(data);
  };

  /**
   * Handle a change event from an input element
   *
   * @param {SyntheticEvent} evt The change event
   * @return {Promise<void>} Resolved when the entity was changed
   */
  handleChange = async ({
    target: {
      value: propValue,
      dataset: { propPath }
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
    this.handleChange(evt).then(this.debouncedSave);

  /**
   * Change the entity without saving it
   *
   * @param {string} propPath The dot path to the property to change
   * @param {any} propValue The value to set the field property to
   * @return {Promise<void>} Promise resolved after the state is updated
   */
  change = async (propPath, propValue) =>
    this._setState(({ changes }) => ({
      changes: { ...changes, [propPath]: propValue }
    }));

  /**
   * Actually the locally cached changes to the remote endpoint.
   *
   * @return {Promise<void>} Resolved when the entity was updated
   */
  save = async () => {
    const {
      dispatch,
      data: { id, type }
    } = this.props;
    const { changes } = this.state;

    try {
      if (changes) {
        await this._setState({ saving: Object.keys(changes) });
        const entityWithChanges = this._applyChanges(
          {
            id,
            type
          },
          true
        );
        await dispatch(
          updateResource(entityWithChanges, apiEndpointConstructor)
        );
      }
      await this._setState({ changes: null, saving: false });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      await this._setState({
        saving: false,
        error: "There was an error saving!"
      });
    }
  };

  /**
   * Clear all local changes
   *
   * @return {Promise<void>} Resolves when the state was updated
   */
  resetAll = async () => this._setState({ changes: null });

  /**
   * Clear the change for one field
   *
   * @param {string} propName The address of the field to reset
   * @return {Promise<void>} Resolves when the state was updated
   */
  reset = async propName => {
    const { changes } = this.state;
    const newChanges = { ...changes };
    delete newChanges[propName];
    return this._setState({ changes: newChanges });
  };

  /**
   * setState but it's a promise
   *
   * @private
   * @param {any} state The parameter passed to setState
   * @return {Promise<void>} Resolved when the state was updated
   */
  async _setState(state) {
    return new Promise(res => this.setState(state, res));
  }

  /**
   * Apply the changes from the changes list to an object
   *
   * @private
   * @param {object} initialObject Object to merge the changes into
   * @param {boolean} completeComplexFields Fields which are themselves an
   * object should be added completely, this is required by Drupal JSON:API for
   * properties of complex fields to be updated.
   * @return {object} The changed object
   */
  _applyChanges(initialObject, completeComplexFields) {
    const { changes } = this.state;
    const { data } = this.props;
    return !changes
      ? initialObject
      : Object.keys(changes).reduce((prev, curr) => {
          const pathArr = curr.split(".");
          let changeSet = prev;
          // The completeComplexFields flag was set, this is a complex field and
          // hasn't been already added to the object we're currently
          // constructing.
          if (
            completeComplexFields &&
            pathArr.length > 2 &&
            pathArr[0] === "attributes" &&
            !get(prev, [pathArr[0], pathArr[1]])
          ) {
            // Put the complete complex field into the changeSet.
            changeSet = set(
              changeSet,
              [pathArr[0], pathArr[1]],
              get(data, [pathArr[0], pathArr[1]])
            );
          }

          return set(changeSet, curr, changes[curr]);
        }, initialObject);
  }

  render() {
    const { children } = this.props;
    const { saving, error } = this.state;

    return children({
      change: this.change,
      save: this.save,
      handleChange: this.handleChange,
      handleChangeAndSave: this.handleChangeAndSave,
      getData: this.getData,
      getAllData: this.getAllData,
      saving,
      error
    });
  }
}

export const EditableEntity = connect()(EditableEntityPresentational);
