import React, { Component } from "react";
import "./bottomBar.scss";

export default class BottomBar extends Component {
  render() {
    return (
      <div className="bottomBar">
        <div className="two">
          <div className="div">
            <div>
              <h4>Reach out to me at</h4>
              <div>
                <h5>
                  <i className="fa fa-map-marker"></i>
                  &nbsp; B70 Mosque Road, Hapugastalwa
                </h5>
              </div>
              <div>
                <h5>
                  <i className="fa fa-phone"></i>
                  &nbsp; 077 712 1553
                </h5>
              </div>
              <div>
                <h5>
                  <i className="fa fa-envelope"></i>
                  &nbsp; mnimzan16@gmail.com
                </h5>
              </div>
            </div>
          </div>
          <div className="div">
            {" "}
            <div>
              <h4>Find Me</h4>
              <i
                className="fa fa-instagram"
                onClick={() => {
                  window.open("https://www.facebook.com/mohamed.nasik.1023");
                }}
              ></i>{" "}
              &nbsp;
              <i
                className="fa fa-facebook"
                onClick={() => {
                  window.open("https://www.facebook.com/mohamed.nasik.1023");
                }}
              ></i>{" "}
              &nbsp;
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
          <div className="div">
            <div>
              <h4 style={{}}>
                Looking to hire IT Project Manager with Project Management
                Experience ?
              </h4>
              <div>
                <h5>Hire Nimzan</h5>
              </div>
              <div>
                <h5>Contact Nimzan</h5>
              </div>
              <div>
                <h5>Learn More</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
          }}
        >
          Copyright &copy; 2020 Nimzan Nazzar.All Rights Reserved
        </div>{" "}
      </div>
    );
  }
}
