import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON} from "../actions/pokemon_actions";
import {merge} from 'lodash';

const PokemonReducer = (state={}, action) => {
  Object.freeze(state);

  let copyState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      copyState = action.pokemon;
      return copyState;

    case RECEIVE_POKEMON:
      let newId = action.pokemon.id;
      copyState[newId] = action.pokemon;
      return copyState;

    default:
    console.log( `reducer caught default ${action.type}`);
      return copyState;
  }
};

export default PokemonReducer;
