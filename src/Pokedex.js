import React from 'react';

class Pokedex extends React.Component {

  constructor() {
    super()
    this.state = {
      name: null,
      image: null,
      height: null,
      weight: null,
      loaded: false,
    }
  }

  getCharacter() {
    let randomPokemon = Math.round(Math.random() * 898)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
      .then(response => response.json())
      .then(data => {
        let img = null;
        if (data['sprites']['other']['dream_world']['front_default'])
          img = data['sprites']['other']['dream_world']['front_default']
        else img = data['sprites']['front_default']

        this.setState({
          name: data['name'],
          image: img,
          height: data['height'],
          weight: data['weight'],
          loaded: true,
        })
      })
  }

  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Pok&eacute;mon Randomizer</h1>
        </div>
        {
          this.state.loaded &&

          <div className="body">
            <div className="image">
              <img src={this.state.image} alt=""></img>
            </div>
            <div className="description">
              <p className="name"><strong>Name:</strong> {this.state.name}</p>
              <p className="height"><strong>Height:</strong> {this.state.height}</p>
              <p className="weight"><strong>Weight:</strong> {this.state.weight}</p>
            </div>
          </div>
        }
        <button className="random" type="button" onClick={() => this.getCharacter()}>Randomize</button>
      </div>
    )
  }
}

export default Pokedex;