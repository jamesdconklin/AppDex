import React from 'react';
import {withRouter} from 'react-router';

const PokemonDetail =  ({pokemonDetail, router, children}) => {
  console.log(pokemonDetail);
  var handleClick = (id) => () => router.push(
    `/pokemon/${pokemonDetail.id}/item/${id}`
  );
return(
  <section className="pokemon-detail">
    <img src={pokemonDetail.image_url}/>
    <h1>{pokemonDetail.name}</h1>
    <p>Type: {pokemonDetail.poke_type}</p>
    <p>Attack: {pokemonDetail.attack}</p>
    <p>Defense: {pokemonDetail.defense}</p>
    <p>Moveset: {pokemonDetail.moves.join(', ')}</p>
    <h3>Toys</h3>
    <ul className="poke-items">
      {pokemonDetail.items.map((item) => (
        <li key={item.id}
            onClick={handleClick(item.id)}>
          <img src={item.image_url}/>
        </li>
      ))}
    </ul>
    {children}
  </section>
);
};

export default withRouter(PokemonDetail);
