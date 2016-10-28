export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_POKEMON_DETAIL = "REQUEST_POKEMON_DETAIL";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";


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

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
});
export const createPokemon = (formData) => ({
  type: CREATE_POKEMON,
  formData
});

export const receivePokemonErrors = (error) => ({
  type: RECEIVE_POKEMON_ERRORS,
  error
});
