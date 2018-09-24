import get from "lodash.get";

const namespace = "editable";

export const { Drupal, drupalSettings } = window;

export const apiBase = get(
  drupalSettings,
  `${namespace}.jsonapi_base`,
  "jsonapi"
);

export const apiEndpoint = get(
  drupalSettings,
  `${namespace}.api_endpoint`,
  `${window.location.protocol}//${window.location.host}/${apiBase}`
);

export const getExtensionMiddlewares = () =>
  get(window, `${namespace}.middlewares`, []);
export const getExtensionReducers = () =>
  get(window, `${namespace}.reducers`, {});
export const getExtensionEnhancers = () =>
  get(window, `${namespace}.enhancers`, []);
