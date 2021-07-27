import React, { Component } from 'react'
import './Coin.css';

class Coin extends Component {
  render() {
    let fasIcon = "fas fa-10x ";
    if (this.props.icon === "heads") {
      fasIcon += "fa-helmet-battle";
    } else {
      fasIcon += "fa-dragon";
    }
    return (
      <div className="Coin">
        <i className={fasIcon}></i>
      </div>
    )
  }
}

export default Coin;