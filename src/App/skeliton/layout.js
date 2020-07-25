import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../home";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    );
  }
}
