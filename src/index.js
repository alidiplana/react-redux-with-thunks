import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(allReducers, applyMiddleware(
  thunk
));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById("root")
);
