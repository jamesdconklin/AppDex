import {combineReducers} from 'redux';
import PokemonReducer from './pokemon_reducer';
import errorsReducer from './errors_reducer';
import pokemonDetailReducer from './pokemon_detail_reducer';

const RootReducer = combineReducers({
  pokemon: PokemonReducer,
  pokemonDetail: pokemonDetailReducer,
  errors: errorsReducer
});

export default RootReducer;
