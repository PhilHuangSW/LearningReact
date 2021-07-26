import React, { Component } from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <h1>{this.state.num}</h1>
    )
  }
}

export default Rando;