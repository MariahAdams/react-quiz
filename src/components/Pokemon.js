import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  
  static propTypes = {
    pokemon: PropTypes.object,
    onSelect: PropTypes.func
  };

  handleClick = () => {
    const { pokemon, onSelect } = this.props;
    onSelect(pokemon);
  };

  render() { 
    const { pokemon } = this.props;

    return (
      <li>
        <img src={pokemon.url_image}></img>
        <h3 style={{ color: `${pokemon.color_1}` }}>{pokemon.pokemon}</h3>
        <p style={{ color: `${pokemon.color_1}` }}>Type 1:&nbsp;{pokemon.type_1}</p>
        <p style={{ color: `${pokemon.color_2}` }}>Type 2:&nbsp;{pokemon.type_2}</p>
        <p style={{ color: `${pokemon.color_1}` }}>Attack:&nbsp;{pokemon.attack}</p>
        <p style={{ color: `${pokemon.color_1}` }}>Defense:&nbsp;{pokemon.defense}</p>
        <button onClick={this.handleClick}>Favorite</button>
      </li>
    );
  }
}
 
export default Pokemon;