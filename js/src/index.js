import { createStore } from "./utils";

export const store = createStore();
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
