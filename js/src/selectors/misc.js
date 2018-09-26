import get from "lodash.get";

export const selectApiIsReady = state =>
  !!get(state, "api.endpoint.axiosConfig.baseURL");
