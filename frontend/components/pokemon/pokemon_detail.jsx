import React from 'react';

const PokemonDetail =  ({pokemonDetail}) => {
  console.log(pokemonDetail);
return(
  <section className="pokemon-detail">
    <img src={pokemonDetail.image_url}/>
    <h1>{pokemonDetail.name}</h1>
    <p>Type: {pokemonDetail.poke_type}</p>
    <p>Attack: {pokemonDetail.attack}</p>
    <p>Defense: {pokemonDetail.defense}</p>
    <p>Moveset: {pokemonDetail.moves.join(', ')}</p>
  </section>
);
};

export default PokemonDetail;
