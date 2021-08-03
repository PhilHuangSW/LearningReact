import React, { Component } from 'react'
import './LottoBalls.css';

class LottoBalls extends Component {
  render() {
    return (
      <div className="LottoBall">
        <h1>{this.props.num}</h1>
      </div>
    )
  }
}

export default LottoBalls;