import React from "react";

import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    date: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.date);
  }

  handleChange(e) {
    this.setState({
      date: e.target.value
    });
  }

  render() {
    return (
      <div className="form__wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
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
