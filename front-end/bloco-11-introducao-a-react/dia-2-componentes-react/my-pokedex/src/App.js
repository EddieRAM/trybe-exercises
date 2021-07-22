import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pokemons from './data';

/* 1. Pokémon: Esse componente recebe como entrada um objeto que contém informações referentes
a um pokemon específico. Esse componente precisa retornar as seguintes informações
para serem mostradas para quem usar a aplicação: nome, tipo, peso médio (com unidade), imagem. */

// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

class Pokemon extends Component {
  render() {
    return (
      <div className = 'pokemon-card'>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{`${this.props.weight} ${this.props.unit}`}</p>
        <img src={this.props.image} alt={this.props.name}/>
      </div>
    );
  };
}


/* 2. Pokédex: esse componente representa a enciclopédia de pokemons.
Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela.
Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon. */

class Pokedex extends Component {
  render() {
    return pokemons.map(pokemon => (
      <Pokemon
      name={pokemon.name}
      type={pokemon.type}
      image={pokemon.image}
      weight={pokemon.averageWeight.value}
      unit={pokemon.averageWeight.measurementUnit}
      />
    ));
  };
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Pokédex in React
        </p>        
        <Pokedex />
      </header>
    </div>
  );
}

export default App;
