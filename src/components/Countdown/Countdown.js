import React from "react";

import "./Countdown.css";

const initialState = {
  days: 0,
  months: 0,
  years: 0,
  minutes: 0,
  seconds: 0,
  hours: 0,
  timeLeft: 0
};

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.getTime = this.getTime.bind(this);
    this.fixLeadingZero = this.fixLeadingZero.bind(this);
  }

  state = initialState;

  componentDidMount() {
    this.getTime();
    if (this.state.seconds === 0) {
      // alert("Countdown Completed!");
      clearInterval(this.timerID);
    }
    this.timerID = setInterval(() => {
      this.getTime();
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  shouldComponentUpdate() {
    if (this.state.seconds < 0) {
      return false;
    }
    return true;
  }

  getTime() {
    const timeLeft =
      localStorage.getItem("date.parse") - Date.parse(new Date());
    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
    const days = Math.floor((timeLeft / 1000 / 60 / 60 / 24) % 30);
    const months = Math.floor((timeLeft / 1000 / 60 / 60 / 24 / 30) % 12);
    const years = Math.floor(timeLeft / 1000 / 60 / 60 / 24 / 365);

    this.setState({ days, hours, minutes, seconds, years, months, timeLeft });
  }

  fixLeadingZero(num) {
    return num >= 0 && num < 10 ? "0" + num : num;
  }

  render() {
    return (
      <div className="countdown__wrapper">
        {this.state.timeLeft < 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px"
            }}
          >
            <i
              className="far fa-check-circle"
              style={{
                color: "#00ff00",
                fontSize: "40px",
                marginBottom: "10px"
              }}
            ></i>{" "}
            Countdown Completed!
          </div>
        ) : (
          <>
            <div className="years">
              <span className="value">
                {this.fixLeadingZero(
                  this.state.years < 0 ? 0 : this.state.years
                )}
              </span>
              Years
            </div>
            <div
              className="colon"
              style={{
                fontSize: "30px",
                margin: "0 10px",
                color: "#fff"
              }}
            >
              :
            </div>
            <div className="months">
              <span className="value">
                {this.fixLeadingZero(
                  this.state.months < 0 ? 0 : this.state.months
                )}
              </span>
              Months
            </div>
            <div
              className="colon"
              style={{ fontSize: "30px", margin: "0 10px", color: "#fff" }}
            >
              :
            </div>
            <div className="days">
              <span className="value">
                {this.fixLeadingZero(this.state.days < 0 ? 0 : this.state.days)}
              </span>
              Days
            </div>
            <div
              className="colon"
              style={{ fontSize: "30px", margin: "0 10px", color: "#fff" }}
            >
              :
            </div>
            <div className="hours">
              <span className="value">
                {this.fixLeadingZero(
                  this.state.hours < 0 ? 0 : this.state.hours
                )}
              </span>
              Hours
            </div>
            <div
              className="colon"
              style={{ fontSize: "30px", margin: "0 10px", color: "#fff" }}
            >
              :
            </div>
            <div className="minutes">
              <span className="value">
                {this.fixLeadingZero(
                  this.state.minutes < 0 ? 0 : this.state.minutes
                )}
              </span>
              Minutes
            </div>
            <div
              className="colon"
              style={{ fontSize: "30px", margin: "0 10px", color: "#fff" }}
            >
              :
            </div>
            <div className="seconds">
              <span className="value">
                {this.fixLeadingZero(
                  this.state.seconds < 0 ? 0 : this.state.seconds
                )}
              </span>
              Seconds
            </div>
          </>
        )}
      </div>
    );
  }
}
