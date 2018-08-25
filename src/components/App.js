import React, { Component, Fragment } from 'react';
import pokedex from '../pokedex';
import Pokedex from './Pokedex';
import styles from './App.css';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  handleSelect = favorite => {
    this.setState({ favorite });
  };


  render() {
    const { pokedex, favorite } = this.state;

    return (
      <div className={styles.app}>
        <header>
          <h1>Pick Your Favorite Pok&eacute;mon!</h1>
          <h3>Poked&eacute;x: {pokedex.length}</h3>
        </header>

        <section className="favorite">
          {favorite
            ? <div className="favorite-pokemon">
              <h4>Your Favorite Pok&eacute;mon is:</h4>
              <h2 style={{ color: `${favorite.color_1}` }}>{favorite.pokemon}</h2>
              <img src={favorite.url_image}></img>
            </div>
            : <p>Please select your favorite pok&eacute;mon!</p>
          }
        </section>

        <section>
          {pokedex &&
            <Fragment>
              <Pokedex onSelect={this.handleSelect} pokedex={pokedex}/>
            </Fragment>
          }
        </section>  
      </div>
    );
  }
}

export default App;