import React, { Component, useRef, useEffect, lazy, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Load from "./load";

const Layout = lazy(() => import("./App/skeliton/layout"));

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Suspense
      fallback={
        <div>
          <Load />
        </div>
      }
    >
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
      </div>
    </Suspense>
  );
};

export default App;
