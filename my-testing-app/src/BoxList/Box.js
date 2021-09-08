import React, { Component } from 'react'
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.removeBox(this.props.id);
  }

  render() {
    const boxStyle = {
      width: `${this.props.width}em`,
      height: `${this.props.height}em`,
      backgroundColor: this.props.backgroundColor
    }
    return (
      <div>
        <div style={boxStyle} >
          <button onClick={this.handleChange}>X</button>
        </div >
      </div>

    )
  }
}

export default Box;