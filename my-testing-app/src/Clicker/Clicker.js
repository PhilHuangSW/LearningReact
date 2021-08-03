import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 5
    }
    this.randomNumber = this.randomNumber.bind(this);
  }

  randomNumber(e) {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: rand });
  }

  render() {
    return (
      <div>
        <h1>Your number: {this.state.num}</h1>
        <br />
        {this.state.num === 7 ? <h1>You Win!!!!</h1> : <button onClick={this.randomNumber}>Random Number</button>}
      </div>
    )
  }
}

export default Clicker;