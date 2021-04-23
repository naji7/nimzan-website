import React, { Component } from "react";
import Typical from "react-typical";
import "aos/dist/aos.css";
import $ from "jquery";
import { Link, animateScroll as scroll } from "react-scroll";
import animationData from "./41812-christmas-tree.json";

import "./index.scss";

export default class Index extends Component {
  state = {
    menuOpen: false,
    name: "hidden",
    phone: "hidden",
    email: "hidden",
    area: "hidden",
    value: "SUBMIT",
    btn: "",
    done: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("nav").addClass("black");
        $("#banner").addClass("add");
      } else {
        $("nav").removeClass("black");
        $("#banner").removeClass("add");
      }
    });
  };

  render() {
    function burgerBtn() {
      $(".menu-btn").toggleClass("open");
      $("nav").toggleClass("checked");
    }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <nav>
          <div className="menu-btn" onClick={burgerBtn}>
            <div className="menu-btn_burger"></div>
          </div>
          <div className="logo">
            <a> NIMZAN </a>
          </div>
          <ul>
            <li>
              <Link
                className="spann"
                activeClass="active"
                to="banner"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={burgerBtn}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="spann"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={burgerBtn}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="spann"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={burgerBtn}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="spann"
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={burgerBtn}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className="spann"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={burgerBtn}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <section id="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6 sidename">
                <a className="tite">NIMZAN NAZZAR</a>
                <p className="blinking">
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={["Software Engineer", 1000, "SEO Analyst", 1000]}
                  />
                </p>
                <p className="sub">
                  Software engineer with holistic knowledge in all levels of
                  testing, including performance, functional, integration,
                  system and user acceptance.
                </p>
                <div className="icon">
                  <a
                    className="fa fa-facebook"
                    onClick={() => {
                      window.open("https://www.facebook.com/mohamed.nimzan.9");
                    }}
                  ></a>
                  <a
                    className="fa fa-twitter"
                    onClick={() => {
                      window.open("https://twitter.com/NimzanNazzar");
                    }}
                  ></a>
                  <a
                    className="fa fa-instagram"
                    onClick={() => {
                      window.open("https://www.instagram.com/nimz_zlatan/");
                    }}
                  ></a>
                  <a
                    className="fa fa-linkedin"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/nimzan-nazzar-60613797/"
                      );
                    }}
                  ></a>
                  <a
                    className="fa fa-github"
                    onClick={() => {
                      window.open("https://www.github.com/Nimzan/");
                    }}
                  ></a>

                  <a
                    style={{ textDecoration: "none" }}
                    href="https://api.whatsapp.com/send?phone=94777121553&text=hi!%20Nimzan."
                    class="float"
                    target="_blank"
                  >
                    <a className="fa fa-whatsapp"></a>
                  </a>
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
          <div
            className="middle"
            onClick={() => {
              scroll.scrollTo(800);
            }}
          >
            <div className="mouse"></div>
          </div>
        </section>

        <section id="about">
          <div className="container text-center">
            <div className="row ">
              <div
                className="col-md-6 text-center"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
              >
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
                  The 25 years old has three year plus work experience in the
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
                  skilled on real time web technologies and he is currently
                  working as a software engineer. His eye for creativity helps
                  Nimzan contribute in design/prototype phases of projects while
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
                  <h3>JQUERY / BOOTSTRAP</h3>
                  <span className="bar">
                    <span className="jq" data-aos="slide-right"></span>
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
                onClick={() => {
                  let acc = document.getElementsByClassName("accordion");
                  acc[0].classList.toggle("active");
                  var panel = acc[0].nextElementSibling;
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  }
                }}
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
                onClick={() => {
                  let acc = document.getElementsByClassName("accordion");
                  acc[1].classList.toggle("active");
                  var panel = acc[1].nextElementSibling;
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  }
                }}
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
                  challenges that also came in my way. After successfully
                  qualified Grade-five scholarship examination, unlike unit
                  tests and term tests, O/L is deciding factor in school life
                  that gives you the entry ticket to university and future
                  career paths. I sat for the exams and got four destinctions
                  and four very good passes out of nine subjects.
                </p>
              </div>

              <div
                className="accordion"
                onClick={() => {
                  let acc = document.getElementsByClassName("accordion");
                  acc[2].classList.toggle("active");
                  var panel = acc[2].nextElementSibling;
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  }
                }}
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
                onClick={() => {
                  let acc = document.getElementsByClassName("accordion");
                  acc[3].classList.toggle("active");
                  var panel = acc[3].nextElementSibling;
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  }
                }}
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
                      id="name"
                      required
                      className="input-area"
                      onKeyUp={(i) => {
                        let key = i.target.value
                          .toString()
                          .replace(/[^A-Za-z]/gi, "");
                        document.getElementById("name").value = key;
                      }}
                    />
                    <label for="name" className="label" id="lname">
                      Username
                    </label>
                    <a
                      className="fa fa-exclamation"
                      style={{
                        visibility: this.state.name,
                      }}
                    ></a>
                  </div>
                  <div
                    className="input-group"
                    data-aos="fade-zoom-in"
                    data-aos-delay="600"
                  >
                    <input
                      type="text"
                      id="email"
                      required
                      className="input-area"
                    />
                    <label for="email" className="label" id="lemail">
                      Email
                    </label>
                    <a
                      className="fa fa-exclamation"
                      style={{
                        visibility: this.state.email,
                      }}
                    ></a>
                  </div>
                  <div
                    className="input-group"
                    data-aos="fade-zoom-in"
                    data-aos-delay="900"
                  >
                    <input
                      type="text"
                      id="phone"
                      required
                      className="input-area"
                      onKeyUp={(i) => {
                        let key = i.target.value
                          .toString()
                          .replace(/[a-zA-Z]/g, "");
                        document.getElementById("phone").value = key;
                      }}
                    />
                    <label for="phone" className="label" id="lphone">
                      Phone
                    </label>
                    <a
                      className="fa fa-exclamation"
                      style={{
                        visibility: this.state.phone,
                      }}
                    ></a>
                  </div>
                  <div
                    className="input-group"
                    data-aos="fade-zoom-in"
                    data-aos-delay="1000"
                  >
                    <input
                      type="text"
                      id="area"
                      required
                      className="input-area"
                    />
                    <label for="area" className="label" id="larea">
                      Your Message
                    </label>
                    <a
                      className="fa fa-exclamation"
                      style={{
                        visibility: this.state.area,
                      }}
                    ></a>
                  </div>
                  <button
                    disabled={this.state.btn}
                    id="btn"
                    className="Button"
                    onClick={() => {
                      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                      var bc = null;
                      if (document.getElementById("name").value == "") {
                        this.setState({
                          name: "visible",
                        });
                        document.getElementById("lname").style.color =
                          "#ff4a57";
                        this.state.done = false;
                      } else {
                        this.setState({ name: "hidden" });
                        this.state.done = true;
                      }
                      if (document.getElementById("email").value == "") {
                        this.setState({
                          email: "visible",
                        });
                        document.getElementById("lemail").style.color =
                          "#ff4a57";
                        this.state.done = false;
                      } else {
                        this.setState({ email: "hidden" });
                        this.state.done = true;
                      }
                      if (document.getElementById("phone").value == "") {
                        this.setState({
                          phone: "visible",
                        });
                        document.getElementById("lphone").style.color =
                          "#ff4a57";
                        this.state.done = false;
                      } else {
                        this.setState({ phone: "hidden" });
                        this.state.done = true;
                      }
                      if (document.getElementById("area").value == "") {
                        this.setState({
                          area: "visible",
                        });
                        document.getElementById("larea").style.color =
                          "#ff4a57";
                        this.state.done = false;
                      } else {
                        this.setState({ area: "hidden" });
                        this.state.done = true;
                      }
                      if (
                        reg.test(document.getElementById("email").value) ==
                        false
                      ) {
                        this.setState({ email: "visible" });
                        this.state.done = false;
                        document.getElementById("lemail").style.color =
                          "#ff4a57";
                      }

                      if (this.state.done == true) {
                        this.state.value = "Thank You, I'll get to you soon.";
                        this.setState({ btn: "true" });
                        document.getElementById("name").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("area").value = "";
                        document.getElementById("phone").value = "";
                        document.getElementById("lname").style.color =
                          "whitesmoke";
                        document.getElementById("lemail").style.color =
                          "whitesmoke";
                        document.getElementById("larea").style.color =
                          "whitesmoke";
                        document.getElementById("lphone").style.color =
                          "whitesmoke";
                      }
                    }}
                  >
                    {this.state.value}
                  </button>
                </div>
              </div>
              <div
                className="col-md-6 map"
                data-aos="fade-zoom-in"
                data-aos-delay="600"
              >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7919.165313255943!2d80.56759357306898!3d7.058224529608619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae376e96475eea9%3A0x53dbbbfcff705b84!2sHapugastalawa!5e0!3m2!1sen!2slk!4v1595610398935!5m2!1sen!2slk" />
              </div>
            </div>
          </div>
        </section>
        <div id="footer">
          <div className="container">
            <a href="" className="logo text-center">
              <div className="social">
                <a href="">
                  <i
                    className="fa fa-facebook"
                    onClick={() => {
                      window.open("https://www.facebook.com/mohamed.nimzan.9");
                    }}
                  ></i>
                </a>
                <a href="">
                  <i
                    className="fa fa-twitter"
                    onClick={() => {
                      window.open("https://twitter.com/NimzanNazzar");
                    }}
                  ></i>
                </a>
                <a href="">
                  <i
                    className="fa fa-instagram"
                    onClick={() => {
                      window.open("https://www.instagram.com/nimz_zlatan/");
                    }}
                  ></i>
                </a>
                <a href="">
                  <i
                    className="fa fa-linkedin"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/nimzan-nazzar-60613797/"
                      );
                    }}
                  ></i>
                </a>
              </div>
              <hr />
              <p className="copyright ">
                Copyright &copy; 2021 Nimzan Nazzar. All Rights Reserved
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
