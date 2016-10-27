export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_POKEMON_DETAIL = "REQUEST_POKEMON_DETAIL";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const receivePokemonDetail = (pokemon) => ({
  type: RECEIVE_POKEMON_DETAIL,
  pokemon
});

export const requestPokemonDetail = (id) => ({
  type: REQUEST_POKEMON_DETAIL,
  id
});
