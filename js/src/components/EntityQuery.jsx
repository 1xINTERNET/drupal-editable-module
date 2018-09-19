import React, { Component } from "react";
import { connect } from "react-redux";
import { readEndpoint } from "redux-json-api";

import { isDev } from "../utils";

import { DataSet } from "..";

class EntityQuery extends Component {
  state = {
    loading: false,
    resourceIds: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { dispatch, bundle, type, uuid } = this.props;
    const endpoint = `${bundle}/${type}${uuid ? `/${uuid}` : ""}`;
    this.setState({ loading: true });
    try {
      const {
        body: { data }
      } = await dispatch(readEndpoint(endpoint));
      const resources = Array.isArray(data) ? data : [data];

      this.setState({
        loading: false,
        resourceIds: resources
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);

      this.setState({ loading: false, error: e });
    }
  };

  render() {
    const { loading, resourceIds, error } = this.state;
    const { children } = this.props;

    return (
      <DataSet
        loading={loading}
        resourceIds={resourceIds}
        error={error && error.toString()}
      >
        {children}
      </DataSet>
    );
  }
}

if (isDev) {
  const PropTypes = require("prop-types");
  EntityQuery.propTypes = {
    children: PropTypes.element.isRequired,
    bundle: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired
  };
}

const EntityQueryContainer = connect()(EntityQuery);

export {
  EntityQueryContainer as EntityQuery,
  EntityQuery as EntityQueryPresentational
};
