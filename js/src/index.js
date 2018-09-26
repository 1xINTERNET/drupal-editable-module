import "./polyfills";

/* eslint-disable import/no-unresolved */
import "expose-loader?React!react";
import "expose-loader?ReactDOM!react-dom";
import "expose-loader?PropTypes!prop-types";
/* eslint-enable import/no-unresolved */

// Create and export the shared redux store.
import { createStore } from "./utils";

export const store = createStore();

// Alias and export other utility functions.
export { default as get } from "lodash.get";
export { default as set } from "immutable-set";
export { default as cx } from "classnames";
export { connect, Provider } from "react-redux";
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
