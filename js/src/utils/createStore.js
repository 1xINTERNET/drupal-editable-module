import {
  createStore as createReduxStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as api, setAxiosConfig } from "redux-json-api";
import {
  apiEndpoint,
  apiHost,
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
    composeWithDevTools(
      applyMiddleware(thunk, ...getExtensionMiddlewares()),
      ...getExtensionEnhancers()
    )
  );

  fetch(`${apiHost}/rest/session/token`)
    .then(res => res.text())
    .then(token =>
      store.dispatch(
        setAxiosConfig({
          baseURL: apiEndpoint,
          headers: {
            "X-CSRF-Token": token
          }
        })
      )
    );

  return store;
};
