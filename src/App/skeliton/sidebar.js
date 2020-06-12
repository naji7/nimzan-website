import React, { Component } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
// import img from "./nim2.jpg";
import * as Scroll from "react-scroll";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default class Sidebar extends Component {
  UnActive(e) {
    let lis = document.getElementsByClassName("active");
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
    }
  }

  render() {
    let mainNavLinks = document.querySelectorAll("nav ul li span");
    let mainSelection = document.querySelectorAll("main section");

    let lastId;
    let cur = [];
    window.addEventListener("scroll", (event) => {
      let fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        let section = document.querySelector(link.hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    });
    return (
      <div className="sidebar">
        <div className="imge">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
            // src={img}
            // style={{
            //   borderRadius: "50%",
            //   height: "170px",
            //   width: "170px",
            //   position: "fixed",
            // }}
            />
          </div>
          <span>NIMZAN NAZZAR</span>
          <span className="sub">SOFTWARE ENGINEER | SEO ANALYST</span>
        </div>

        <nav>
          <ul className="text-capitalize list-unstyled">
            <li>
              <span
                href="s1"
                onClick={(e) => {
                  scroll.scrollToTop();
                  this.UnActive(e);
                  e.target.className += " active";
                }}
              >
                {" "}
                HOME{" "}
              </span>
            </li>
            <li>
              <span
                href="s2"
                onClick={(e) => {
                  scroll.scrollTo(700);
                  this.UnActive(e);
                  e.target.className += " active";
                }}
              >
                {" "}
                ABOUT{" "}
              </span>
            </li>
            <li>
              <span
                href="s3"
                onClick={(e) => {
                  scroll.scrollTo(1400);
                  this.UnActive(e);
                  e.target.className += " active";
                }}
              >
                {" "}
                SKILLS{" "}
              </span>
            </li>
            <li>
              <span
                href="s4"
                onClick={(e) => {
                  scroll.scrollTo(700);
                  this.UnActive(e);
                  e.target.className += " active";
                }}
              >
                {" "}
                EDUCATION{" "}
              </span>
            </li>
            <li>
              <span
                href="s5"
                onClick={(e) => {
                  scroll.scrollTo(700);
                  this.UnActive(e);
                  e.target.className += " active";
                }}
              >
                {" "}
                CONTACT{" "}
              </span>
            </li>
          </ul>
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
          <span>Copyright &copy; 2020 Nimzan Nazzar. All Rights Reserved</span>
        </div>
      </div>
    );
  }
}
