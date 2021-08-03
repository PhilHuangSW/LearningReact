import React, { Component } from 'react'


class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
      backgroundColor: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      width: null,
      height: null,
      backgroundColor: ''
    })
  }

  render() {
    return (
      <div>
        <h1>New Boxes: </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width: </label>
          <input
            type="text"
            value={this.state.width}
            name="width"
            onChange={this.handleChange}
            id="width"
          />
          <br />
          <label htmlFor="height">Height: </label>
          <input
            type="text"
            value={this.state.height}
            name="height"
            onChange={this.handleChange}
            id="height"
          />
          <br />
          <label htmlFor="backgroundColor">Background Color: </label>
          <input
            type="text"
            value={this.state.backgroundColor}
            name="backgroundColor"
            onChange={this.handleChange}
            id="backgroundColor"
          />
          <br />
          <button>Add Color Box</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;