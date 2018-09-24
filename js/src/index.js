// These imports will be exposed by webpack's expose-loader
/* eslint-disable no-unused-vars */
import * as React from "react";
import ReactDOM from "react-dom";
/* eslint-enable no-unused-vars */

import { createStore } from "./utils";

// Only import the prop-types package if this is a development build.
if (process.env.NODE_ENV === "development") {
  require("prop-types");
}

// Create and export the shared redux store.
export const store = createStore();

// Alias and export other utility functions.
export { default as get } from "lodash.get";
export { default as set } from "immutable-set";
export { connect } from "react-redux";
export { css } from "emotion";
export { createSelector } from "reselect";
export {
  createResource,
  readEndpoint,
  updateResource,
  deleteResource,
  hydrateStore
} from "redux-json-api";
export { DataSet, Query, EditableEntity } from "./components";
export { getQueryFromEntityReference, getQueryFromRIO } from "./normalizers";
