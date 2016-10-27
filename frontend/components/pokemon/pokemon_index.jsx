import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   this.props.requestAllPokemon();
  // }

  render() {
    var {pokemon} = this.props;
    return (
      <section className="pokeDex">
        <ol>
          {pokemon.map((poke) => <PokemonIndexItem key={poke.id} pokemon={poke}/> )}
        </ol>
        {this.props.children}
      </section>
    );
  }

  //
  // static _pokemonListItem(pok) {
  //   return(
  //     <li className="dex-entry" key={pok.id}>
  //       <img src={pok.image_url}/>
  //       {pok.name}
  //     </li>
  //   );
  // }
}

export default PokemonIndex;
