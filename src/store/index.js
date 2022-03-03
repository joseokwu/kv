import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reducers from "./reducers";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //https://github.com/zalmoxisus/redux-devtools-extension
let storedData = sessionStorage.getItem("kv")
  ? JSON.parse(sessionStorage.getItem("kv"))
  : {};
const logger = (store) => (next) => (action) => {
  let result = next(action);
  sessionStorage.setItem("kv", JSON.stringify(store.getState()));
  return result;
};
const middlewares = [thunk, reduxPromise, logger];

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    { ...storedData },
    compose(applyMiddleware(...middlewares))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
