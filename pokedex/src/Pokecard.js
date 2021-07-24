import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    // const pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
    let longId;
    if (id < 10) {
      longId = '00' + id;
    } else if (id < 100) {
      longId = '0' + id;
    } else {
      longId = id;
    }
    const pokeUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + longId + '.png';
    const pokeImgAlt = name + " image";
    // console.log(pokeUrl);
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{name}</h3>
        <img src={pokeUrl} alt={pokeImgAlt} />
        <div>{type}</div>
        <div>experience: {base_experience}</div>

      </div>
    )
  }
}

export default Pokecard;