import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var {pokemon, loading} = this.props;
    let renderedContent = (<section className="poke-dex">
      <img src="/assets/pokemon_spinner.gif"/>
    </section>);

    if (!loading) {
      renderedContent = (
        <section className="poke-dex">
          <ul className="dex-list">
            {pokemon.map((poke) => <PokemonIndexItem key={poke.id} pokemon={poke}/> )}
          </ul>
          <section className="index-child-wrap">
            {this.props.children}
          </section>
          <div></div>
        </section>
      );
    }
    return renderedContent;
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
