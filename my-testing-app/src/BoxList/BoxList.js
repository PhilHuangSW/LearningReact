import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
  }
  render() {
    return (
      <div>
        <NewBoxForm />
        <Box width={100} height={50} backgroundColor="purple" />
      </div>
    )
  }
}

export default BoxList;