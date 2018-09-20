import React, { Component } from "react";
import { connect } from "react-redux";
import { readEndpoint } from "redux-json-api";

import { isDev } from "../utils";

import { DataSet } from "..";

class Query extends Component {
  static defaultProps = {
    uuid: null
  };

  state = {
    loading: false,
    resourceIds: null
  };

  componentDidMount() {
    this.fetchData();
  }

  handleRefetch = () => {
    this.fetchData();
  };

  fetchData = async () => {
    const { dispatch, bundle, type, uuid } = this.props;
    const endpoint = `${bundle}/${type}${uuid ? `/${uuid}` : ""}`;
    this.setState({ loading: true });
    try {
      const {
        body: { data: resourceIds }
      } = await dispatch(readEndpoint(endpoint));

      this.setState({ loading: false, resourceIds });
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
        doRefetch={this.handleRefetch}
      >
        {children}
      </DataSet>
    );
  }
}

if (isDev) {
  const PropTypes = require("prop-types");
  Query.propTypes = {
    children: PropTypes.element.isRequired,
    bundle: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uuid: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOfType(PropTypes.string)
    ])
  };
}

const QueryContainer = connect()(Query);

export { QueryContainer as Query, Query as QueryPresentational };
