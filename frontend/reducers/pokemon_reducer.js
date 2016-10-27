import {RECEIVE_ALL_POKEMON} from "../actions/pokemon_actions";
import {merge} from 'lodash';

const PokemonReducer = (state={}, action) => {
  Object.freeze(state);

  let copyState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      copyState = action.pokemon;
      return copyState;

    default:
    console.log( `reducer caught default ${action.type}`);
      return copyState;
  }
};

export default PokemonReducer;
