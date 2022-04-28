import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reducers from "./reducers";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //https://github.com/zalmoxisus/redux-devtools-extension

const middlewares = [thunk, reduxPromise];

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
