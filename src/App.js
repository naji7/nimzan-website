import React, { Component, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./App/skeliton/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import MetaTags from "react-meta-tags";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      {/* <MetaTags>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </MetaTags> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
      ></meta>
      <Router>
        <Switch>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
