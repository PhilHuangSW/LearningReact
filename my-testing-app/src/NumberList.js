import React, { Component } from 'react';
import Number from './Number';

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5]
    }
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log("hiiii from parents")
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    return (
      <div>
        {this.state.nums.map(x => (<li><Number key={x} value={x} remove={() => this.remove(x)} /></li>))}
      </div>
    )
  }
}

export default NumberList;