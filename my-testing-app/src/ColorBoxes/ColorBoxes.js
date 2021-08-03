import React, { Component } from 'react';
import Boxes from './Boxes';
import './ColorBoxes.css';
import { random } from '../helpers';

class ColorBoxes extends Component {
  static defaultProps = {
    colors: [
      "black",
      "blue",
      "green",
      "red",
      "yellow",
      "purple",
      "orange",
      "white"
    ],
    numBoxes: 18
  }

  constructor(props) {
    super(props);
    let rando = random(props.colors);
    this.state = {
      currColor: rando
    };

  }

  render() {
    return (
      <div className="ColorBoxes">
        {Array(this.props.numBoxes).fill().map(x =>
          <div>
            {this.state.currColor && <Boxes color={this.state.currColor} array={this.props.colors} />}
          </div>
        )}
      </div>
    )
  }
}

export default ColorBoxes;