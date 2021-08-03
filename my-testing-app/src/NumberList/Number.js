import React, { Component } from 'react';

class Number extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    console.log("hiii from Child")
    this.props.remove();
  }

  render() {
    return (
      <div>
        {this.props.value} -
        <button onClick={this.handleRemove}>X</button>
      </div>
    )
  }
}

export default Number;