import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var {pokemon, loading, children} = this.props;
    let spinner = (<section className="loader"></section>);

    console.log(loading ? "SPIN GAT DANGIT" : "Proceed")

    return (
      <section className="poke-dex">
        <ul className="dex-list">
          {pokemon.map((poke) => <PokemonIndexItem key={poke.id} pokemon={poke}/> )}
        </ul>
        <section className="index-child-wrap">
          {loading ? spinner : children}
        </section>
        <div></div>
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
