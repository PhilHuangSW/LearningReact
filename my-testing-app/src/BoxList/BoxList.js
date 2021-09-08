import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(box) {
    this.setState({
      boxes: [...this.state.boxes, box]
    })
  }

  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {
          this.state.boxes.map((box) => (
            <Box key={box.id} id={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} removeBox={this.removeBox} />
          ))
        }
      </div>
    )
  }
}

export default BoxList;