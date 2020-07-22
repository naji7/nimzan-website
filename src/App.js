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

const App = () => {
  const [lyricsItem, setLyricItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const lyricsFunction = async () => {
    try {
      const data = await Axios.get(
        "https://api.lyrics.ovh/v1/Eminem/Godzilla"
      ).then((res) => {
        console.log(res);
        setLyricItem(res.data.lyrics);
      });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
    lyricsFunction();
  }, []);
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
      ></meta>

      {/* {loading ? lyricsItem : <ReactBootStrap.Spinner animation="border" />} */}
      <Router>
        <Switch>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
