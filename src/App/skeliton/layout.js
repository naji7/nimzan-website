import React, { Component } from "react";
import Sidebar from "./sidebar";
import Bodycontent from "./bodyContent";
import Home from "../home/home";
import { Switch, Route } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div
      // className="BigBody"
      // style={{
      //   display: "flex",
      //   flexDirection: "row",
      //   justifyContent: "space-between",
      // }}
      >
        {/* <div>
          <Sidebar />
        </div>
        <div>
          <Bodycontent />
        </div> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
