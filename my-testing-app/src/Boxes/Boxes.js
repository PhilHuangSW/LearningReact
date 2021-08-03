import React, { Component } from 'react';
import './Boxes.css';
import { random } from '../helpers';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currColor: this.props.color
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let rando;
    do {
      rando = random(this.props.array);
    } while (rando === this.state.currColor);
    this.setState({ currColor: rando });
  }

  handleClick() {
    this.changeColor();
  }

  render() {
    return (
      <div className="Boxes" onClick={this.handleClick} style={{ backgroundColor: this.state.currColor }} >

      </div >
    )
  }
}

export default Boxes;