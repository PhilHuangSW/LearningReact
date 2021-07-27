import React, { Component } from 'react'

class Score extends Component {
  static defaultProps = {
    array: ['1', '2', '3', 'what', 'is', '1325ljkhlk']
  }
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score
    }
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1 })
  }

  tripleKill() {
    this.setState(st => ({
      score: st.score + 1
    }))
    this.setState(st => ({
      score: st.score + 1
    }))
    this.setState(st => ({
      score: st.score + 1
    }))
  }

  render() {
    let myArray = ['1', 'after', ...this.props.array, 2, 'hey',];
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>

        <h2>{myArray.map((e) => <h1>{e}</h1>)}</h2>

        <button onClick={this.singleKill}>Single Kill</button>
        <button onClick={this.tripleKill}>Triple Kill</button>
      </div>
    )
  }
}

export default Score;