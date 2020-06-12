import React, { Component, useRef } from "react";
import AnimatedNumber from "react-animated-number";
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
import CountUp from "react-countup";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { act } from "react-dom/test-utils";
import { withStyles } from "@material-ui/core/styles";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="main"
      >
        <div>
          <div className="sidebar">
            <div className="imge">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    borderRadius: "50%",
                    height: "170px",
                    width: "170px",
                  }}
                />
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
              >
                CONTACT
              </Link>
            </nav>

            <div className="copywrite">
              <div>
                {" "}
                <i
                  className="fa fa-facebook"
                  onClick={() => {
                    window.open("https://www.facebook.com/mohamed.nasik.1023");
                  }}
                ></i>
              </div>
              <div>
                {" "}
                <i
                  className="fa fa-twitter"
                  onClick={() => {
                    window.open("https://www.facebook.com/mohamed.nasik.1023");
                  }}
                ></i>
              </div>
              <div>
                {" "}
                <i
                  className="fa fa-instagram"
                  onClick={() => {
                    window.open("https://www.facebook.com/mohamed.nasik.1023");
                  }}
                ></i>
              </div>
              <div>
                {" "}
                <i
                  className="fa fa-linkedin"
                  onClick={() => {
                    window.open("https://www.facebook.com/mohamed.nasik.1023");
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
        <main>
          <main>
            <main>
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
                  <div className="img1">
                    <span className="head">Hi!</span>
                    <br />
                    <span className="head">I'm Nimzan</span>
                    <br />
                    <span className="sub">Software Engineer | SEO Analyst</span>
                  </div>
                </div>
                <div className="nav">
                  <label className="dots" id="dot1" for="i1"></label>
                  <label className="dots" id="dot2" for="i2"></label>
                </div>
              </div>
              <section className="whoAmI" id="s2">
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
              </section>
              <div className="mySkills" id="s3">
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
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
                        <CountUp
                          end={90}
                          duration={4}
                          suffix="%"
                          decimals={1}
                        />
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
                        <CountUp
                          end={98}
                          duration={3}
                          suffix="%"
                          decimals={1}
                        />
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
                        <CountUp
                          end={87}
                          duration={2}
                          suffix="%"
                          decimals={1}
                        />
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
                        <CountUp
                          end={80}
                          duration={3}
                          suffix="%"
                          decimals={1}
                        />
                      </h1>
                      <span className="label" style={{ color: "white" }}>
                        GOSSIPING
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education" style={{ height: "100vh" }} id="s4">
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
              <section className="contact" id="s5">
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "50px",
                  }}
                >
                  <input
                    className="input"
                    type="text"
                    name=""
                    placeholder="Name"
                  ></input>
                  &nbsp;
                  <input
                    className="input"
                    type="text"
                    name=""
                    placeholder="Email"
                  ></input>
                  &nbsp;
                  <input
                    className="input"
                    type="text"
                    name=""
                    placeholder="Phone"
                  ></input>
                  &nbsp;
                  <textarea
                    className="inputarea"
                    type="text"
                    name=""
                    placeholder="Your Message"
                  ></textarea>
                  &nbsp;
                  <button
                    style={{
                      width: "270px",
                      height: "30px",
                      borderRadius: "50px",
                      outline: "none",
                      border: "1px solid black",
                      backgroundColor: "black",
                      opacity: "0.8",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Sumbit
                  </button>
                </div>
                <div>
                  <span className="smlheading">LET'S TALK</span>
                </div>
                &nbsp;
                <div>
                  <span className="bighead">REACH OUT TO ME AT</span>
                </div>
              </section>
            </main>
          </main>
        </main>
      </div>
    );
  }
}
