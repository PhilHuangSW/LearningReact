import React, { Component } from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.makeTimer = this.makeTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }

  startTimer() {
    this.makeTimer();
  }

  render() {
    console.log('Changing!');
    return (
      <div>
        <button onClick={this.startTimer}>Click to Start!</button>
        <h1>{this.state.num}</h1>
      </div>
    )
  }
}

export default Rando;