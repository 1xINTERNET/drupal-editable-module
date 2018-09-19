import {
  createStore as createReduxStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import { reducer as api, setAxiosConfig } from "redux-json-api";
import {
  apiEndpoint,
  extensionReducers,
  extensionMiddlewares,
  extensionEnhancers
} from ".";

export const createStore = () => {
  const reducer = combineReducers({
    api,
    ...extensionReducers
  });

  const store = createReduxStore(
    reducer,
    applyMiddleware(thunk, ...extensionMiddlewares),
    ...extensionEnhancers
  );

  store.dispatch(
    setAxiosConfig({
      baseURL: apiEndpoint
    })
  );
  return store;
};
