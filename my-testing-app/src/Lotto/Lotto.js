import React, { Component } from 'react';
import LottoBalls from './LottoBalls';
import './Lotto.css';

class Lotto extends Component {
  static defaultProps = {
    name: 'Lottery',
    numBalls: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props);
    this.state = {
      // nums: Array(this.props.numBalls).fill(0),
      nums: Array.from({ length: this.props.numBalls })
    }
    this.generate = this.generate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState(currState => ({
      nums: currState.nums.map(x => Math.floor(Math.random() * this.props.maxNum) + 1)
    }))
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div className="Lotto">
        <h1>Welcome to {this.props.name}!!</h1>
        <div className="Lotto-Ball">
          {this.state.nums.map(x => <LottoBalls num={x} />)}
        </div>
        <button className="Lotto-Button" onClick={this.handleClick}>Generate new numbers</button>
      </div>
    )
  }
}

export default Lotto;