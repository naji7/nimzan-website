import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import "aos/dist/aos.css";
import ScrollAnimation from "react-animate-on-scroll";

import "./index.scss";

let lastScrollY = 0;
let ticking = 0;
export default class Index extends Component {
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll, true);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // nav = React.createRef();

  // handleScroll = () => {
  //   lastScrollY = window.scrollY;

  //   if (!ticking) {
  //     window.requestAnimationFrame(() => {
  //       var header = document.getElementById("nav-bar");
  //       header.classList.toggle("shrink", window.scrollY > 0);
  //     });

  //     ticking = true;
  //   }
  // };

  render() {
    function addEdu(e) {
      let acc = document.getElementsByClassName("accordion");

      for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        };
      }
    }
    return (
      <div>
        <section id="nav-bar" className="bai">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">
              <a> NIMZAN </a>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <Link to="banner">
                  <li spy={true} smooth={true} offset={-70} duration={500}>
                    <a>HOME</a>
                  </li>
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li>
                    <a>ABOUT</a>
                  </li>
                </Link>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li>
                    <a>SKILLS</a>
                  </li>
                </Link>
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li>
                    <a>EDUCATION</a>
                  </li>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li>
                    <a>CONTACT</a>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </section>

        <section id="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6 sidename">
                <p className="tite">NIMZAN NAZZAR</p>
                <p className="blinking">
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={["Software Engineer", 1000, "SEO Analyst", 1000]}
                  />
                </p>
                <div className="icon">
                  <a className="fa fa-facebook"></a>
                  <a className="fa fa-twitter"></a>
                  <a className="fa fa-instagram"></a>
                  <a className="fa fa-linkedin"></a>
                  <a className="fa fa-whatsapp"></a>
                  <a className="fa fa-envelope"></a>
                </div>
              </div>
              <div className="col-md-6 text-center image">
                <img
                  src={require("../assets/land.PNG")}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="mouse"></div>
          </div>
        </section>

        <section id="about">
          <div className="container text-center">
            <div className="row ">
              <div className="col-md-6 text-center" data-aos="fade-right">
                <img
                  src={require("../assets/about1.JPG")}
                  className="img-fluid maimg"
                />
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <p>
                  {" "}
                  <strong> Nimzan Nazzar</strong>, former student of Al Min Haj
                  National School. Nimzan is completed his BSc(Hons) Computer
                  Science and Software Engineering Degree at{" "}
                  <a href="https://www.sliit.lk/">
                    Sri Lanka Institute Of Information Technology.
                  </a>{" "}
                  <br /> <br />
                  The 24 years old has three year plus work experience in the
                  area of Software Engineering and Search Engine optimizing(SEO)
                  with reputed Organizations.
                  <br />
                  <br /> Currently associated with{" "}
                  <a href="https://rakbank.ae/wps/portal/retail-banking">
                    RakBank.
                  </a>
                  <br />
                  <br /> Nimzan is an IT enthusiast with a good eye on the level
                  of detail. Having graduated as a computer engineer, he is well
                  skilled on real time web technologies and is currently working
                  as a software engineer. His eye for creativity helps Nimzan
                  contribute in design/prototype phases of projects while
                  supporting teams across their complete development stack in
                  transforming the design to a complete product.
                </p>
                <img
                  src={require("../assets/sign.png")}
                  className="sign img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div
              className="head"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <h1 className="title text-center" style={{ color: "white" }}>
                MY
              </h1>
              <h1
                className="title text-center"
                style={{ marginLeft: "10px", color: "#ff4a57" }}
              >
                SKILLS
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "0px",
              }}
            >
              <hr
                style={{
                  margin: "0px",
                  backgroundColor: "#ff4a57",
                  width: "70px",
                  height: "1.5px",
                }}
              />
            </div>
            <p>
              I have technical skills that will simply take your breath away.
              But wait there’s more. You get all this Technical knowledge plus a
              grasp of marketing that is second nature.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="mainbar">
                <li>
                  <h3>HTML5 / CSS3</h3>
                  <span className="bar">
                    <span className="html" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>JAVA</h3>
                  <span className="bar">
                    <span className="java" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>JAVASCRIPT / TYPESCRIPT</h3>
                  <span className="bar">
                    <span className="script" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>ANGULAR JS</h3>
                  <span className="bar">
                    <span className="angular" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>C++</h3>
                  <span className="bar">
                    <span className="c1" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>C#</h3>
                  <span className="bar">
                    <span className="c2" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>FLUTTER</h3>
                  <span className="bar">
                    <span className="flut" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>MY SQL</h3>
                  <span className="bar">
                    <span className="sql" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>FIREBASE</h3>
                  <span className="bar">
                    <span className="fire" data-aos="slide-right"></span>
                  </span>
                </li>
                <li>
                  <h3>SQ LITE</h3>
                  <span className="bar">
                    <span className="sqlite" data-aos="slide-right"></span>
                  </span>
                </li>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="container">
            <div
              className="head"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <a></a>
              <h1 className="title text-center" style={{ color: "white" }}>
                EDU
              </h1>
              <h1 className="title text-center" style={{ color: "#ff4a57" }}>
                CATION
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "0px",
              }}
            >
              <hr
                style={{
                  margin: "0px",
                  backgroundColor: "#ff4a57",
                  width: "70px",
                  height: "1.5px",
                }}
              />
            </div>
            <div className="eduDetail">
              <div
                className="accordion"
                onClick={addEdu}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <h5>2000</h5>
                <div className="icon"></div>
              </div>
              <div className="panel">
                <p>
                  So the day started off as a scary venture. I can vividly
                  remember the singing of the nursery rhymes, the hours of
                  playing with putty and playing a role as a train passenger.
                  Our nursery seemed so much fun to me, especially with all the
                  singing, dancing and games.
                </p>
              </div>

              <div
                className="accordion"
                onClick={addEdu}
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h5>2001 - 2011</h5>
                <div className="icon"></div>
              </div>
              <div className="panel">
                <p>
                  School days are without doubt an interesting episode in my
                  life. Apart from the fun, getting through exams is one of many
                  challenges that also come in my way. After successfully
                  qualified Grade-five scholarship examination, unlike unit
                  tests and term tests, O/L is deciding factor in school life
                  that gives you the entry ticket to university and future
                  career paths. I sat for the exams and got four destinctions
                  and four very good passes out of nine subjects.
                </p>
              </div>

              <div
                className="accordion"
                onClick={addEdu}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <h5>2012 - 2014</h5>
                <div className="icon"></div>
              </div>
              <div className="panel">
                <p>
                  After qualified O/L examination I wanted to do something I
                  liked. Therefore I chose physical science stream. After my A/L
                  result i had to select staid resolution.
                </p>
              </div>
              <div
                className="accordion"
                onClick={addEdu}
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h5>2015 - 2018</h5>
                <div className="icon"></div>
              </div>
              <div className="panel">
                <p>
                  I heard from my Deda about the enrollment for the new Bachelor
                  of Science in software Engineering of SLIIT. For the first
                  time in my life, I felt an enthusiasm towards the education.
                  It was also a flash back that reminded me how much I loved
                  computers and such devices, games, software products such as
                  Visual Basic, HTML, Adobe products and etc. I was a quick
                  learner in software product use but never crossed the mind to
                  make a career out of it. Therefore praise be to Almighty with
                  a lot of hope I joined SLIIT in year 2015. My passion towards
                  the technology and the enthusiasm to regularly practice what I
                  learned, led me to very good results in the exams. Programming
                  algorithms, networking, deep studies on computers, lab
                  sessions were irresistible. And finally I completed BSc(Hons)
                  Computer Science and Software Engineering Degree. It was only
                  5 years back when I made my greatest decision to switch my
                  field of study and it has now proven correct.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <h1 className="title text-center" style={{ color: "white" }}>
                GET IN
              </h1>
              <h1
                className="title text-center"
                style={{ marginLeft: "20px", color: "#ff4a57" }}
              >
                TOUCH
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "0px",
              }}
            >
              <hr
                style={{
                  margin: "0px",
                  backgroundColor: "#ff4a57",
                  width: "90px",
                  height: "1.5px",
                }}
              />
            </div>
            <p className="first">
              If you wish you to contact Nimzan with any queries related to
              Software Engineering, SEO consulting or simply to share your
              experience.
            </p>
            <p>Please send us a message.</p>
            <div className="row ">
              <div className="col-md-6 text-center co">
                <div className="c">
                  <div
                    className="input-group"
                    data-aos="fade-zoom-in"
                    data-aos-delay="300"
                  >
                    <input
                      type="text"
                      id="inputField"
                      required
                      className="input-area"
                    />
                    <label for="inputField" className="label">
                      Username
                    </label>
                  </div>
                  <div
                    className="input-group"
                    data-aos="fade-zoom-in"
                    data-aos-delay="600"
                  >
                    <input
                      type="text"
                      id="inputField"
                      required
                      className="input-area"
                    />
                    <label for="inputField" className="label">
                      Email
                    </label>
                  </div>
                  <div
                    className="input-group"
                    data-aos="fade-zoom-in"
                    data-aos-delay="900"
                  >
                    <input
                      type="text"
                      id="inputField"
                      required
                      className="input-area"
                    />
                    <label for="inputField" className="label">
                      Phone
                    </label>
                  </div>
                  <div
                    className="input-group"
                    data-aos="fade-zoom-in"
                    data-aos-delay="1200"
                  >
                    <input
                      type="text"
                      id="message"
                      required
                      className="input-area"
                    />
                    <label for="message" className="label">
                      Your Message
                    </label>
                  </div>
                  <button id="btn" className="Button">
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className="col-md-6" id="map"></div>
            </div>
          </div>
        </section>
        <div id="footer">
          <div className="container">
            <a href="" className="logo text-center">
              <div className="social">
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <hr />
              <p className="copyright ">
                Copyright &copy; 2020 Nimzan Nazzar. All Rights Reserved
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
