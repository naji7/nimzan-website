import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import "./bodyContent.scss";
import LearnMore from "../learn More/learnMore";
import ContactNim from "../contactNim/contactNim";
import MoreInfo from "../moreInfo/moreInfo";

export default class Bodycontent extends Component {
  render() {
    return (
      <div className="BodyContent">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/learn_more">
            <LearnMore />
          </Route>
          <Route path="/contact_nimzan">
            <ContactNim />
          </Route>
          <Route path="/more_information">
            <MoreInfo />
          </Route>
        </Switch>
      </div>
    );
  }
}
