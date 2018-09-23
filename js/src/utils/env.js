// eslint-disable-next-line import/no-extraneous-dependencies
import get from "lodash.get";

const {
  config: { namespace }
} = require("../../package.json");

export const { Drupal, drupalSettings } = window;

export const apiEndpoint =
  get(drupalSettings, "improved_contrib_ui_core.api_endpoint") ||
  `${window.location.protocol}//${window.location.host}/${get(
    drupalSettings,
    "improved_contrib_ui_core.jsonapi_base",
    "jsonapi"
  )}`;

export const extensionMiddlewares = get(
  window,
  `${namespace}.extension.middlewares`,
  []
);
export const extensionReducers = get(
  window,
  `${namespace}.extension.reducers`,
  {}
);
export const extensionEnhancers = get(
  window,
  `${namespace}.extension.enhancers`,
  []
);
