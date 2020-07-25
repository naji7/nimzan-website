import React, { Component, useRef, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./App/skeliton/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import MetaTags from "react-meta-tags";
import Axios from "axios";
import ParticleComponent from "./ParticleComponent";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
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
      {/* <Router>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ParticleComponent />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Switch>
              <Route path="/">
                <Layout />
              </Route>
            </Switch>
          </div>
        </div>
      </Router> */}
      ;
    </div>
  );
};

export default App;
