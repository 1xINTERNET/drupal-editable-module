import get from "lodash.get";

const namespace = "editable";

export const { Drupal, drupalSettings } = window;

// Settings are in drupalSettings.editable or editable_settings
export const settings = get(
  window,
  `drupalSettings.${namespace}`,
  window[`${namespace}_settings`] || {}
);

export const extensionNamespace = window[namespace] || {};

export const apiBase = settings.jsonapi_base || "jsonapi";

export const apiHost =
  settings.api_host || `${window.location.protocol}//${window.location.host}`;

export const apiEndpoint = settings.api_endpoint || `${apiHost}/${apiBase}`;

export const getExtensionMiddlewares = () =>
  extensionNamespace.middlewares || [];
export const getExtensionReducers = () => extensionNamespace.reducers || {};
export const getExtensionEnhancers = () => extensionNamespace.enhancers || [];
