import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import YIP from "./views/pages/yip";
import Spotlight from "./views/pages/spotlight";
import Gallery from "./views/pages/Gallery";
import Team from "./views/pages/Teams";
import UGAd from "./views/pages/UGAd";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/BARC" render={(props) => <Index {...props} />} />
      <Route
        path="/yip"
        render={(props) => <YIP {...props} />}
      />
       <Route
        path="/gallery"
        render={(props) => <Gallery {...props} />}
      />
      <Route
        path="/spotlight"
        render={(props) => <Spotlight {...props} />}
      />
      <Route
        path="/team"
        render={(props) => <Team {...props} />}
      />
      <Route
        path="/ugad"
        render={(props) => <UGAd {...props} />}
      />
      <Redirect from="/" to="/BARC" />
    </Switch>
  </BrowserRouter>
);
