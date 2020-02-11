import React from "react";

import "./Countdown.css";

export default class Countdown extends React.Component {
  render() {
    return (
      <div className="countdown__wrapper">
        <div className="days">
          <span className="value">1</span>Days
        </div>
        <div style={{ fontSize: "30px", margin: "0 10px" }}>:</div>
        <div className="months">
          <span className="value">1</span>Months
        </div>
        <div style={{ fontSize: "30px", margin: "0 10px" }}>:</div>
        <div className="years">
          <span className="value">1</span>Years
        </div>
        <div style={{ fontSize: "30px", margin: "0 10px" }}>:</div>
        <div className="hours">
          <span className="value">1</span>Hours
        </div>
        <div style={{ fontSize: "30px", margin: "0 10px" }}>:</div>
        <div className="minutes">
          <span className="value">1</span>Minutes
        </div>
        <div style={{ fontSize: "30px", margin: "0 10px" }}>:</div>
        <div className="seconds">
          <span className="value">1</span>Seconds
        </div>
      </div>
    );
  }
}
