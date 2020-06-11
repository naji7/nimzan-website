import React, { Component } from "react";
import "./contactNim.scss";
import BottomBar from "../templates/bottomBar";

export default class ContactNim extends Component {
  componentDidMount() {
    this.findDate();
  }
  findDate() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();

    document.getElementById("date").innerHTML =
      months[date.getMonth()] +
      " " +
      date.getDate() +
      ", " +
      date.getFullYear();
  }
  render() {
    return (
      <div className="contactNim">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <h1 style={{ marginBottom: "0px" }}>Contact Nimzan</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <i className="fa fa-calendar"></i> &nbsp; &nbsp;
            <div id="date"></div>
          </div>
          <div>
            <p>
              If you wish to contact Nimzan with any quaries related to software
              Engineering, SEO consulting or simply to share your experience
            </p>
            <p>Please sent us a Message</p>
          </div>
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
          <BottomBar />
        </div>
      </div>
    );
  }
}
