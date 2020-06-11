import React, { Component, useRef } from "react";
import AnimatedNumber from "react-animated-number";
import "./home.scss";
import img from "./nim1.jpg";
import img1 from "./floor.jpg";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import BottomBar from "../templates/bottomBar";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Home extends Component {
  componentDidMount() {
    // scroll.scrollToTop();
  }
  state = {
    expanded: false,
    setExpanded: false,
  };

  render() {
    return (
      <div className="home">
        <div className="home1" id="s1">
          <input type="radio" name="images" id="i1" checked />
          <input type="radio" name="images" id="i2" />
          <div className="slide-img" id="one">
            <img src={img} />
            <div className="img1">
              <span className="head">Hi!</span>
              <br />
              <span className="head">I'm Nimzan</span>
              <br />
              <span className="sub">Software Engineer | SEO Analyst</span>
            </div>
          </div>
          <div className="slide-img" id="two">
            <img src={img1} />
            <h1 style={{ position: "absolute", top: "50%" }}>hi sof</h1>
          </div>
          <div className="nav">
            <label className="dots" id="dot1" for="i1"></label>
            <label className="dots" id="dot2" for="i2"></label>
          </div>
        </div>
        <div className="whoAmI" style={{ padding: "15% 5%" }} id="s2">
          <div>
            <span className="smlheading">ABOUT US</span>
          </div>
          &nbsp;
          <div>
            <span className="bighead">WHO AM I?</span>
          </div>
          <div className="para">
            <p>
              {" "}
              <strong> Nimzan Nazzar</strong>, former student of Al Min Haj
              National School is completed his BSc(Hons) Computer
              Science(Software Engineering) Degree at Sri Lanka Institute Of
              Information Technology. <br /> <br />
              The 24 years old has three year plus work experience in the area
              of Software Engineering and Search Engine optimizing(SEO) with
              reputed Organizations.
              <br />
              <br /> Currently associated with hvvhbhjhj. <br />
              <br /> Nimzan is a IT enthusiast with a good eye on the level of
              detail. Having graduated as a computer engineer, he is well
              skilled on real time web technologies and is currently working as
              a software engineer. His eye for creativity helps Nimzan
              contribute in design/prototype phases of projects while supporting
              teams across their complete development stack in transforming the
              design to a complete product.
            </p>
          </div>
        </div>
        <div className="mySkills" style={{ padding: "0% 5%" }} id="s3">
          <div>
            <span className="smlheading">MY SPECIALTY</span>
          </div>
          &nbsp;
          <div>
            <span className="bighead">MY SKILLS</span>
          </div>
          <div className="para">
            <p>
              I have technical skills that will simply take your breath away.
              But wait…there’s more. You get all this Technical knowledge plus a
              grasp of marketing that is second nature.
            </p>
          </div>
        </div>
        <div className="skillImage" id="s4">
          <div className="parallax">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // alignItems: "center",
                padding: "80px 80px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    width: "100px",
                  }}
                >
                  <CountUp end={90} duration={4} suffix="%" decimals={1} />
                </h1>
                <span className="label" style={{ color: "white" }}>
                  COMUNICATION
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    width: "100px",
                  }}
                >
                  <CountUp end={98} duration={3} suffix="%" decimals={1} />
                </h1>
                <span className="label" style={{ color: "white" }}>
                  LEADERSHIP
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1 style={{ color: "white", width: "100px" }}>
                  <CountUp end={87} duration={2} suffix="%" decimals={1} />
                </h1>
                <span className="label" style={{ color: "white" }}>
                  CREATIVITY
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1 style={{ color: "white", width: "100px" }}>
                  <CountUp end={80} duration={3} suffix="%" decimals={1} />
                </h1>
                <span className="label" style={{ color: "white" }}>
                  GOSSIPING
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="education" style={{ height: "100vh" }} id="s5">
          <div>
            <h1>Education</h1>
          </div>
          <div style={{ padding: "0px 50px" }}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h4>Expansion Panel 1</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </h5>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            &nbsp;
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h4>Expansion Panel 2</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </h5>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
    );
  }
}
