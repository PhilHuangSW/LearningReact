import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numFlips: 0,
      numHeads: 0,
      numTails: 0,
      hot: ''
    }
    this.flipCoin = this.flipCoin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  flipCoin() {
    this.setState(x => ({ numFlips: x.numFlips + 1 }));
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
      this.setState(x => ({
        numHeads: x.numHeads + 1,
        hot: x.hot = "heads"
      }));
    } else {
      this.setState(x => ({
        numTails: x.numTails + 1,
        hot: x.hot = "tails"
      }));
    }
  }

  handleClick() {
    this.flipCoin();
  }

  reset() {
    this.setState({
      numFlips: 0,
      numHeads: 0,
      numTails: 0,
      hot: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.hot !== '' && <Coin icon={this.state.hot} />}
        <button onClick={this.handleClick}>Flip a coin!</button>
        <h2>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</h2>
        <button onClick={this.reset}>Reset All</button>
      </div >
    )
  }
}


export default CoinFlipper;