import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./App/skeliton/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Layout />
        </Route>
        <Route path="/learn_more">
          <Layout />
        </Route>
        <Route path="/contact_nimzan">
          <Layout />
        </Route>
        <Route path="/more_information">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
