import React from "react";

import "./Form.css";

const initialState = {
  date: "",
  dateError: "" // Form validation
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  state = initialState;

  handleChange(e) {
    this.setState({
      date: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      localStorage.setItem("date.parse", Date.parse(this.state.date));
      // Clear form
      this.setState(initialState);
    }
  }

  validate() {
    let dateError = "";
    if (!this.state.date.includes("-")) {
      dateError = "invalid date input!";
    }

    if (dateError) {
      this.setState({ dateError: dateError });
      return false;
    }

    return true;
  }

  render() {
    return (
      <div className="form__wrapper">
        <form onSubmit={this.handleSubmit}>
          {this.state.dateError ? (
            <div className="form__error">{this.state.dateError}</div>
          ) : null}
          <input
            name="date"
            className="form__input"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <button className="form__button" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}
