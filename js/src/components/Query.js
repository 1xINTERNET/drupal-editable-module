import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { readEndpoint } from "redux-json-api";
import { connect } from "react-redux";
import { DataSet } from ".";
import { selectApiIsReady } from "../selectors";

export class QueryPresentational extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    bundle: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    uuid: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    apiIsReady: PropTypes.bool
  };

  static defaultProps = {
    uuid: null,
    apiIsReady: false
  };

  state = {
    loading: false,
    resourceIds: null
  };

  componentDidMount() {
    const { apiIsReady } = this.props;
    if (apiIsReady) {
      this.fetchData();
    }
  }

  componentDidUpdate({ apiIsReady: apiWasReady }) {
    const { apiIsReady } = this.props;
    if (!apiWasReady && apiIsReady) {
      this.fetchData();
    }
  }

  /**
   * Fetch the actual data from the API
   *
   * @return {Promise<void>} Resolved when the data was retrieved
   */
  fetchData = async () => {
    try {
      const { dispatch, bundle, type, uuid } = this.props;
      const endpoint = `${type}/${bundle}${uuid ? `/${uuid}` : ""}`;
      await this._setState({ loading: true });
      const {
        body: { data: resourceIds }
      } = await dispatch(readEndpoint(endpoint));

      await this._setState({ loading: false, resourceIds });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      await this._setState({ loading: false, error: e });
    }
  };

  /**
   * setState but it's a promise
   *
   * @param {any} state The parameter passed to setState
   * @return {Promise<void>} Resolved when the state was updated
   */
  async _setState(state) {
    return new Promise(res => this.setState(state, res));
  }

  render() {
    const { loading, resourceIds, error } = this.state;
    const { children } = this.props;

    return (
      <DataSet
        loading={loading}
        resourceIds={resourceIds}
        error={error && error.toString()}
        refetch={this.fetchData}
      >
        {children}
      </DataSet>
    );
  }
}

export const Query = connect(state => ({
  apiIsReady: selectApiIsReady(state)
}))(QueryPresentational);
