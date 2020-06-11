import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
