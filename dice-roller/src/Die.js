import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  convertNumToString() {
    let numToString;
    switch (this.props.pips) {
      case 1:
        numToString = 'fas fa-dice-one fa-10x die';
        break;
      case 2:
        numToString = 'fas fa-dice-two fa-10x die';
        break;
      case 3:
        numToString = 'fas fa-dice-three fa-10x die';
        break;
      case 4:
        numToString = 'fas fa-dice-four fa-10x die';
        break;
      case 5:
        numToString = 'fas fa-dice-five fa-10x die';
        break;
      default:
        numToString = 'fas fa-dice-six fa-10x die';
        break;
    }
    return numToString
  }

  render() {
    let faDie = this.convertNumToString();
    return (
      <div>
        <h2>{this.props.pips}</h2>
        <i className={`${faDie} ${this.props.rolling && 'Die-wobble'}`}></i>
      </div>
    )
  }
}

export default Die;