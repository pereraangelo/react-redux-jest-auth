import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "./static/css/responsive.css";
import { store } from "./createStore";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

const history = createBrowserHistory();
ReactDOM.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
