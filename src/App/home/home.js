import React, { Component, useRef, useEffect } from "react";
import AnimatedNumber from "react-animated-number";
import CountUp, { startAnimation } from "react-countup";
import "./home.scss";
import img from "./nim1.jpg";
import img1 from "./floor.jpg";
import img2 from "./nim2.jpg";

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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { act } from "react-dom/test-utils";
import { withStyles } from "@material-ui/core/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import VisibilitySensor from "react-visibility-sensor";

const style = {
  componentName: {},
  col: {},
  countup: {},
};
export default class Home extends Component {
  state = {
    done: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      startAnimation(this.myCountUp);
    }
  };

  render() {
    return (
      <div className="mainn">
        <div>
          <div id="sidebar">
            <div
              id="tb"
              className="tgleBtn"
              onClick={() => {
                // document.getElementById("sidebar").classList.toggle("actives");
                document.getElementById("sidebar").style.marginLeft = "300px";
                document.getElementById("tb").style.visibility = "hidden";
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className="side"
              onTouchMove={() => {
                document.getElementById("sidebar").style.marginLeft = "0";
                document.getElementById("tb").style.visibility = "visible";
              }}
              // onClick={() => {
              //   document.getElementById("sidebar").style.marginLeft = "0";
              //   document.getElementById("tb").style.visibility = "visible";
              // }}
            >
              <div className="imge">
                <div className="imgside">
                  <img className="img2" src={img2} alt="img2" />
                </div>
                <span>NIMZAN NAZZAR</span>
                <span className="sub">SOFTWARE ENGINEER | SEO ANALYST</span>
              </div>

              <nav>
                <Link
                  className="spann"
                  activeClass="active"
                  to="s1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    // document
                    //   .getElementById("sidebar")
                    //   .classList.toggle("actives");
                    document.getElementById("sidebar").style.marginLeft = "0";
                  }}
                >
                  HOME
                </Link>
                <br />

                <Link
                  className="spann"
                  activeClass="active"
                  to="s2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    // document
                    //   .getElementById("sidebar")
                    //   .classList.toggle("actives");
                    document.getElementById("sidebar").style.marginLeft = "0";
                    document.getElementById("tb").style.visibility = "visible";
                  }}
                >
                  ABOUT
                </Link>
                <br />

                <Link
                  className="spann"
                  activeClass="active"
                  to="s3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    // document
                    //   .getElementById("sidebar")
                    //   .classList.toggle("actives");
                    document.getElementById("sidebar").style.marginLeft = "0";
                    document.getElementById("tb").style.visibility = "visible";
                  }}
                >
                  SKILLS
                </Link>
                <br />

                <Link
                  className="spann"
                  activeClass="active"
                  to="s4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    // document
                    //   .getElementById("sidebar")
                    //   .classList.toggle("actives");
                    document.getElementById("sidebar").style.marginLeft = "0";
                    document.getElementById("tb").style.visibility = "visible";
                  }}
                >
                  EDUCATION
                </Link>
                <br />
                <Link
                  className="spann"
                  activeClass="active"
                  to="s5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    document.getElementById("sidebar").style.marginLeft = "0";
                    document.getElementById("tb").style.visibility = "visible";
                  }}
                >
                  CONTACT
                </Link>
              </nav>
              <div className="copywrite">
                <div>
                  <i
                    className="fa fa-facebook"
                    onClick={() => {
                      window.open("https://www.facebook.com/mohamed.nimzan.9");
                    }}
                  ></i>
                </div>
                <div>
                  <i
                    className="fa fa-twitter"
                    onClick={() => {
                      window.open("https://twitter.com/NimzanNazzar");
                    }}
                  ></i>
                </div>
                <div>
                  {" "}
                  <i
                    className="fa fa-instagram"
                    onClick={() => {
                      window.open("https://www.instagram.com/nimz_zlatan/");
                    }}
                  ></i>
                </div>
                <div>
                  {" "}
                  <i
                    className="fa fa-linkedin"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/nimzan-nazzar-60613797/"
                      );
                    }}
                  ></i>
                </div>
              </div>
              <div className="final">
                <span>
                  Copyright &copy; 2020 Nimzan Nazzar. All Rights Reserved
                </span>
              </div>
            </div>
          </div>
        </div>

        <main>
          <main>
            <main
              id="cont"
              className="main"
              onTouchMove={() => {
                document.getElementById("sidebar").style.marginLeft = "0";
                document.getElementById("tb").style.visibility = "visible";
              }}
              onClick={() => {
                document.getElementById("sidebar").style.marginLeft = "0";
                document.getElementById("tb").style.visibility = "visible";
              }}
            >
              <div className="home1" id="s1">
                <div className="slide-img" id="one">
                  <img
                    src={img}
                    className="img-fluid"
                    alt="Responsive image"
                  ></img>
                  <div className="img1">
                    <span className="head">Hi!</span>
                    <br />
                    <span className="head">I'm Nimzan</span>
                    <br />
                    <span className="sub">Software Engineer | SEO Analyst</span>
                  </div>
                </div>
              </div>
              <div className="whoAmI" id="s2" data-aos="fade-right">
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
                    <strong> Nimzan Nazzar</strong>, former student of Al Min
                    Haj National School is completed his BSc(Hons) Computer
                    Science(Software Engineering) Degree at Sri Lanka Institute
                    Of Information Technology. <br /> <br />
                    The 24 years old has three year plus work experience in the
                    area of Software Engineering and Search Engine
                    optimizing(SEO) with reputed Organizations.
                    <br />
                    <br /> Currently associated with hvvhbhjhj. <br />
                    <br /> Nimzan is a IT enthusiast with a good eye on the
                    level of detail. Having graduated as a computer engineer, he
                    is well skilled on real time web technologies and is
                    currently working as a software engineer. His eye for
                    creativity helps Nimzan contribute in design/prototype
                    phases of projects while supporting teams across their
                    complete development stack in transforming the design to a
                    complete product.
                  </p>
                </div>
              </div>
              <div className="mySkills" id="s3" data-aos="fade-right">
                <div>
                  <span className="smlheading">MY SPECIALTY</span>
                </div>
                &nbsp;
                <div>
                  <span className="bighead">MY SKILLS</span>
                </div>
                <div className="para">
                  <p>
                    I have technical skills that will simply take your breath
                    away. But wait…there’s more. You get all this Technical
                    knowledge plus a grasp of marketing that is second nature.
                  </p>
                </div>
              </div>
              <div className="skillImage">
                <div className="parallax">
                  <div className="one">
                    <div className="one-one">
                      <h1>
                        <CountUp
                          className="h1"
                          end={90}
                          duration={4}
                          suffix="%"
                          decimals={1}
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <span className="label">COMUNICATION</span>
                    </div>
                    <div className="one-one">
                      <h1>
                        <CountUp
                          className="h1"
                          end={98}
                          duration={3}
                          suffix="%"
                          decimals={1}
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <span className="label">LEADERSHIP</span>
                    </div>
                    <div className="one-one">
                      <h1>
                        <CountUp
                          className="h1"
                          end={87}
                          duration={2}
                          suffix="%"
                          decimals={1}
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <span className="label">CREATIVITY</span>
                    </div>
                    <div className="one-one">
                      <h1>
                        <CountUp
                          className="h1"
                          end={80}
                          duration={3}
                          suffix="%"
                          decimals={1}
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <span className="label">GOSSIPING</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education" id="s4" data-aos="fade-right">
                <div>
                  <span className="smlheading">EDUCATION</span>
                </div>
                &nbsp;
                <div>
                  <span className="bighead">EDUCATION</span>
                </div>
                <div className="panel">
                  <ExpansionPanel className="ExpansionPanel">
                    <ExpansionPanelSummary
                      className="ExpansionPanelSummary"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <span>2000</span>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="ExpansionPanelDetails">
                      <span>
                        So the day started off as a scary venture. I can vividly
                        remember the singing of the nursery rhymes, the hours of
                        playing with putty and playing a role as a train
                        passenger. Our nursery seemed so much fun to me,
                        especially with all the singing, dancing and games.
                      </span>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  &nbsp;
                  <ExpansionPanel className="ExpansionPanel">
                    <ExpansionPanelSummary
                      className="ExpansionPanelSummary"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <span>2001 - 2011</span>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="ExpansionPanelDetails">
                      <span>
                        School days are without doubt an interesting episode in
                        my life. Apart from the fun, getting through exams is
                        one of many challenges that also come in my way. After
                        successfully qualified Grade-five scholarship
                        examination, unlike unit tests and term tests, O/L is
                        deciding factor in school life that gives you the entry
                        ticket to university and future career paths. I sat for
                        the exams and got four destinctions and four very good
                        passes out of nine subjects.
                      </span>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  &nbsp;
                  <ExpansionPanel className="ExpansionPanel">
                    <ExpansionPanelSummary
                      className="ExpansionPanelSummary"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <span>2012 - 2014</span>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="ExpansionPanelDetails">
                      <span>
                        After qualified O/L examination I wanted to do something
                        I liked. Therefore I chose physical science stream.
                        After my A/L result i had to select staid resolution.
                      </span>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  &nbsp;
                  <ExpansionPanel className="ExpansionPanel">
                    <ExpansionPanelSummary
                      className="ExpansionPanelSummary"
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <span>2015 - 2018</span>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="ExpansionPanelDetails">
                      <span>
                        I heard from my Deda about the enrollment for the new
                        Bachelor of Science in software Engineering of SLIIT.
                        For the first time in my life, I felt an enthusiasm
                        towards the education. It was also a flash back that
                        reminded me how much I loved computers and such devices,
                        games, software products such as Visual Basic, HTML,
                        Adobe products and etc. I was a quick learner in
                        software product use but never crossed the mind to make
                        a career out of it. Therefore praise be to Almighty with
                        a lot of hope I joined SLIIT in year 2015. My passion
                        towards the technology and the enthusiasm to regularly
                        practice what I learned, led me to very good results in
                        the exams. Programming algorithms, networking, deep
                        studies on computers, lab sessions were irresistible.
                        And finally I completed BSc ....... It was only 5 years
                        back when I made my greatest decision to switch my field
                        of study and it has now proven correct.
                      </span>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </div>
              <section className="contact" id="s5" data-aos="fade-right">
                <div>
                  <span className="smlheading">GET IN TOUCH</span>
                </div>
                &nbsp;
                <div>
                  <span className="bighead">CONTACT</span>
                </div>
                <div className="para">
                  <p>
                    If you wish you to contact Nimzan with any queries related
                    to Software Engineering, SEO consulting or simply to share
                    your experience.
                    <br />
                    <br /> Please sent us a message.
                  </p>
                </div>
                <div className="form">
                  <input
                    id="name"
                    className="input"
                    type="text"
                    name=""
                    placeholder="Name"
                    onKeyUp={(i) => {
                      let key = i.target.value
                        .toString()
                        .replace(/[^A-Za-z]/gi, "");
                      document.getElementById("name").value = key;
                    }}
                  ></input>
                  &nbsp;
                  <input
                    id="email"
                    className="input"
                    type="text"
                    name=""
                    placeholder="Email"
                  ></input>
                  &nbsp;
                  <input
                    id="phone"
                    className="input"
                    type="text"
                    name=""
                    placeholder="Phone"
                    onKeyUp={(i) => {
                      let key = i.target.value
                        .toString()
                        .replace(/[a-zA-Z]/g, "");
                      document.getElementById("phone").value = key;
                    }}
                  ></input>
                  &nbsp;
                  <textarea
                    id="area"
                    className="inputarea"
                    type="text"
                    name=""
                    placeholder="Your Message"
                  ></textarea>
                  &nbsp;
                  <input
                    className="button"
                    type="button"
                    value="Submit"
                    id="btn"
                    onClick={() => {
                      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                      var bc = null;
                      if (document.getElementById("name").value == "") {
                        document.getElementById("name").style.border =
                          "1px solid red";
                        // this.setState({ done: false });
                        this.state.done = false;
                      } else {
                        document.getElementById("name").style.border =
                          "1px solid black";
                        // this.setState({ done: true });
                        this.state.done = true;
                      }
                      if (document.getElementById("email").value == "") {
                        document.getElementById("email").style.border =
                          "1px solid red";
                        // this.setState({ done: false });
                        this.state.done = false;
                      } else {
                        document.getElementById("email").style.border =
                          "1px solid black";
                        // this.setState({ done: true });
                        this.state.done = true;
                      }
                      if (document.getElementById("phone").value == "") {
                        document.getElementById("phone").style.border =
                          "1px solid red";
                        // this.setState({ done: false });
                        this.state.done = false;
                      } else {
                        document.getElementById("phone").style.border =
                          "1px solid black";
                        // this.setState({ done: true });
                        this.state.done = true;
                      }
                      if (document.getElementById("area").value == "") {
                        document.getElementById("area").style.border =
                          "1px solid red";
                        // this.setState({ done: false });
                        this.state.done = false;
                      } else {
                        document.getElementById("area").style.border =
                          "1px solid black";
                        // this.setState({ done: true });
                        this.state.done = true;
                      }
                      if (
                        reg.test(document.getElementById("email").value) ==
                        false
                      ) {
                        document.getElementById("email").style.border =
                          "1px solid red";
                        // this.setState({ done: false });
                        this.state.done = false;
                      }

                      if (this.state.done == true) {
                        bc = document.getElementById("btn");
                        bc.style.background = "rgba(255,0,0,0.6)";
                        bc.style.border = "rgba(255,0,0,0.6)";
                        if (bc.value == "Submit")
                          bc.value = "Thank You, I'll get to you soon.";
                        else bc.value = "Submit";
                      }
                    }}
                  ></input>
                </div>
                <div className="letUsTalk">
                  <span className="smlheading">LET'S TALK</span>
                </div>
                &nbsp;
                <div>
                  <span className="bighead">REACH OUT TO ME AT</span>
                </div>
                <div className="containerr">
                  <div className="box">
                    <div className="icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <h4>Address</h4>
                      <h3>Nimzan Nazzar, Hapugastalawa</h3>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <h4>Mobile</h4>
                      <h3>+94 77 712 1553</h3>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <h4>Email</h4>
                      <h3>mnimzan@gmail.com</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="smlheading">SOCIAL MEDIA</span>
                </div>
                &nbsp;
                <div>
                  <span className="bighead">FIND ME ON ONLINE</span>
                </div>
                <div className="media">
                  <div className="btn1">
                    <i
                      className="fa fa-facebook"
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/mohamed.nimzan.9"
                        );
                      }}
                    ></i>
                  </div>
                  <div className="btn2">
                    <i
                      className="fa fa-twitter"
                      onClick={() => {
                        window.open("https://twitter.com/NimzanNazzar");
                      }}
                    ></i>
                  </div>
                  <div className="btn3">
                    <i
                      className="fa fa-instagram"
                      onClick={() => {
                        window.open("https://www.instagram.com/nimz_zlatan/");
                      }}
                    ></i>
                  </div>
                  <div className="btn4">
                    <i
                      className="fa fa-linkedin"
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/nimzan-nazzar-60613797/"
                        );
                      }}
                    ></i>
                  </div>
                </div>
              </section>
              <div
                className="wave"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "143px",
                  bottom: "0",
                }}
              ></div>
            </main>
          </main>
        </main>
      </div>
    );
  }
}
