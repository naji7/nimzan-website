import React, { Component } from "react";
import Sidebar from "./sidebar";
import Bodycontent from "./bodyContent";

export default class Layout extends Component {
  render() {
    return (
      <div
        className="BigBody"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Sidebar />
        </div>
        <div>
          <Bodycontent />
        </div>
      </div>
    );
  }
}
