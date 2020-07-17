import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

import "./index.scss";

export default class Index extends Component {
  // addEdu(e) {
  //   let acc = document.getElementsByClassName("accordion");

  //   for (let i = 0; i < acc.length; i++) {
  //     acc[i].onclick = function (i) {
  //       this.classList.toggle("active");
  //       var panel = this.nextElementSibling;
  //       if (panel.style.maxHeight) {
  //         panel.style.maxHeight = null;
  //       } else {
  //         panel.style.maxHeight = panel.scrollHeight + "px";
  //       }
  //     };
  //   }
  // }
  render() {
    function addEdu(e) {
      let acc = document.getElementsByClassName("accordion");

      for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function (i) {
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
        <section id="nav-bar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              {/* <img src={require("../assets/a.png")} /> */}
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
                <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      HOME
                    </a>
                  </li>
                </Link>
                <Link to="/resources">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      ABOUT
                    </a>
                  </li>
                </Link>
                <Link to="/about_us">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      SKILLS
                    </a>
                  </li>
                </Link>
                <Link>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      EDUCATION
                    </a>
                  </li>
                </Link>
                <Link>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT
                    </a>
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
                <p>NIMZAN NAZZAR</p>
                <p className="blinking">
                  {/* <span className="typed-text"></span>
                  <span className="cursor">&nbsp;</span> */}
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={["software enginner", 1000, "seo anylaist", 1000]}
                  />
                </p>
              </div>
              <div
                className="col-md-6 text-center"
                style={{ border: "1px solid red" }}
              >
                <img
                  src={require("../assets/land.PNG")}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container text-center">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <h1 className="title text-center" style={{ color: "white" }}>
                ABOUT
              </h1>
              <h1
                className="title text-center"
                style={{ marginLeft: "20px", color: "#ff4a57" }}
              >
                US
              </h1>
            </div>
            <div className="row ">
              <div
                className="col-md-6 text-center"
                style={{ border: "1px solid red" }}
              >
                <img
                  src={require("../assets/land.PNG")}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
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
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div
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
                style={{ marginLeft: "20px", color: "#ff4a57" }}
              >
                SKILLS
              </h1>
            </div>
            <div className="mainbar">
              <li>
                <h3>HTML5</h3>
                <span className="bar">
                  <span className="html"></span>
                </span>
              </li>
              <li>
                <h3>CSS3</h3>
                <span className="bar">
                  <span className="css"></span>
                </span>
              </li>
              <li>
                <h3>REACT</h3>
                <span className="bar">
                  <span className="react"></span>
                </span>
              </li>
              <li>
                <h3>JAVA</h3>
                <span className="bar">
                  <span className="java"></span>
                </span>
              </li>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <h1 className="title text-center" style={{ color: "white" }}>
                EDU
              </h1>
              <h1 className="title text-center" style={{ color: "#ff4a57" }}>
                CATION
              </h1>
            </div>
            <div className="eduDetail">
              <div className="accordion" onClick={addEdu}>
                <div className="icon"></div>
                <h5>What is nasik</h5>
              </div>
              <div className="panel">
                <p>
                  skilled on real time web technologies and is currently working
                  as a software engineer. His eye for creativity helps Nimzan
                  contribute in design/prototype phases of projects while
                  supporting teams across their complete development st
                </p>
              </div>

              <div
                className="accordion"
                onClick={() => {
                  this.addEdu();
                }}
              >
                <div className="icon"></div>
                <h5>What is nimzan</h5>
              </div>
              <div className="panel">
                <p>
                  skilled on real time web technologies and is currently working
                  as a software engineer. His eye for creativity helps Nimzan
                  contribute in design/prototype phases of projects while
                  supporting teams across their complete development st
                </p>
              </div>

              <div
                className="accordion"
                onClick={() => {
                  this.addEdu();
                }}
              >
                <div className="icon"></div>
                <h5>What is nihara</h5>
              </div>
              <div className="panel">
                <p>
                  skilled on real time web technologies and is currently working
                  as a software engineer. His eye for creativity helps Nimzan
                  contribute in design/prototype phases of projects while
                  supporting teams across their complete development st
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
