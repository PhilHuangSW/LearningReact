import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieOne: 1,
      dieTwo: 1,
      rolling: false
    };
    this.rollThem = this.rollThem.bind(this);
  }

  rollThem() {
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ dieOne: rand1, dieTwo: rand2, rolling: true })

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000)
  }

  render() {
    return (
      <div className="RollDie">
        <div className="RollDie-dice">
          <Die pips={this.state.dieOne} rolling={this.state.rolling} />
          <Die pips={this.state.dieTwo} rolling={this.state.rolling} />
        </div>
        <div>
          <button className="RollDie-button" onClick={this.rollThem} disabled={this.state.rolling}>
            {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
          </button>
        </div>
      </div>
    )
  }
}

export default RollDice;