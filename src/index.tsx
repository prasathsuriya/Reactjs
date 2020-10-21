import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import App from "./App";
import { HashRouter, RouteComponentProps } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
const history = createBrowserHistory();
ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Router history={history}>
          
          <App />
        </Router>
      </Provider>
    </ScrollToTop>
  </HashRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
