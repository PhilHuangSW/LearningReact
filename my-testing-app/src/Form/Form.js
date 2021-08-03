import React, { Component } from 'react'
import uuid from "uuid/v4";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log(evt);
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: "" });
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="email"
            value={this.state.email}
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
        <h3>You typed: {this.state.username}</h3>
      </div>
    )
  }
}

export default Form;