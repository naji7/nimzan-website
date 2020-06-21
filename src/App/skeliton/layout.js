import React, { Component } from "react";
import Home from "../home/home";
import { Switch, Route } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
