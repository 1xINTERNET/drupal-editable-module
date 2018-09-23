import {
  createStore as createReduxStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import { reducer as api, setAxiosConfig } from "redux-json-api";
import {
  apiEndpoint,
  getExtensionReducers,
  getExtensionMiddlewares,
  getExtensionEnhancers
} from ".";

export const createStore = () => {
  const reducer = combineReducers({
    api,
    ...getExtensionReducers()
  });

  const store = createReduxStore(
    reducer,
    applyMiddleware(thunk, ...getExtensionMiddlewares()),
    ...getExtensionEnhancers()
  );

  store.dispatch(
    setAxiosConfig({
      baseURL: apiEndpoint
    })
  );
  return store;
};
