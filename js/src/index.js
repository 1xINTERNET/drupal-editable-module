import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import * as ReduxThunk from "redux-thunk";
import Reselect from "reselect";
import * as Redux from "redux";
import * as SemanticUiReact from "semantic-ui-react";
import get from "lodash.get";

import "@1xinternet/drupal-semantic-ui/dist/drupal-semantic-ui.css";

import "./polyfills";
import { createStore } from "./utils";

window.React = React;
window.ReactDOM = ReactDOM;
window.ReactRedux = ReactRedux;
window.Redux = Redux;
window.ReduxThunk = ReduxThunk;
window.SemanticUiReact = SemanticUiReact;
window.LodashGet = get;
window.Reselect = Reselect;

export const store = createStore();

export { DataSet, EntityLoader, EntityQuery } from "./components";
export { getQueryFromEntityReference, getQueryFromRIO } from "./normalizers";
export { Drupal, drupalSettings, t, apiEndpoint } from "./utils";
