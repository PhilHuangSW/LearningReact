import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
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
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
    this.setState({
      width: 0,
      height: 0,
      backgroundColor: ''
    })
  }

  render() {
    return (
      <div>
        <h1>New Boxes: </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="width">Width: </label>
            <input
              type="number"
              value={this.state.width}
              name="width"
              onChange={this.handleChange}
              id="width"
            />
          </div>
          <div>
            <label htmlFor="height">Height: </label>
            <input
              type="number"
              value={this.state.height}
              name="height"
              onChange={this.handleChange}
              id="height"
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background Color: </label>
            <input
              type="text"
              value={this.state.backgroundColor}
              name="backgroundColor"
              onChange={this.handleChange}
              id="backgroundColor"
            />
          </div>
          <div>
            <button>Add Color Box</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;