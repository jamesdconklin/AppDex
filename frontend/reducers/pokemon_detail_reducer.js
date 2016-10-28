import {RECEIVE_POKEMON_DETAIL} from '../actions/pokemon_actions';

const pokemonDetailReducer = (state = {moves: [], items: []}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_DETAIL:
      console.log(`PDR responding to ${action.type}`);
      return action.pokemon;
    default:
      console.log(`PDR default caught ${action.type}`);
      return state;
  }
};

export default pokemonDetailReducer;
