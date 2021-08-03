import React, { Component } from 'react'
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boxStyle = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor
    }
    return (
      <div style={boxStyle} >

      </div >
    )
  }
}

export default Box;