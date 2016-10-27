import {fetchAllPokemon, fetchPokemonDetail} from '../util/api_util';
import {
  REQUEST_ALL_POKEMON, REQUEST_POKEMON_DETAIL,
  receiveAllPokemon, receivePokemonDetail
} from '../actions/pokemon_actions';

const PokemonMiddleware = ({dispatch}) => next => action => {

  const fetchAllPokemonSuccess = (payload) => (
    dispatch(receiveAllPokemon(payload))
  );

  const fetchPokemonDetailSuccess = (payload) => (
    dispatch(receivePokemonDetail(payload))
  );

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      console.log(`Middleware request all branch caught ${action.type}`);
      fetchAllPokemon(fetchAllPokemonSuccess);
      return next(action);

    case REQUEST_POKEMON_DETAIL:
      console.log(`Middleware request detail branch caught ${action.type}`);
      fetchPokemonDetail(action.id, fetchPokemonDetailSuccess);
      return next(action);

    default:
      console.log(`MW default caught action ${action.type}`);
      return next(action);
  }

};

export default PokemonMiddleware;
