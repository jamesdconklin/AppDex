import {combineReducers} from 'redux';
import PokemonReducer from './pokemon_reducer';
import pokemonDetailReducer from './pokemon_detail_reducer';

const RootReducer = combineReducers({
  pokemon: PokemonReducer,
  pokemonDetail: pokemonDetailReducer
});

export default RootReducer;
