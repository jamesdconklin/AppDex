import {fetchAllPokemon, fetchPokemonDetail, createPokemon}
  from '../util/api_util';
import {
  REQUEST_ALL_POKEMON, REQUEST_POKEMON_DETAIL,
  receiveAllPokemon, receivePokemonDetail,
  CREATE_POKEMON, receivePokemon,
  RECEIVE_POKEMON_ERRORS, receivePokemonErrors
} from '../actions/pokemon_actions';
import {hashHistory} from 'react-router';

const PokemonMiddleware = ({dispatch}) => next => action => {

  const fetchAllPokemonSuccess = (payload) => (
    dispatch(receiveAllPokemon(payload))
  );

  const fetchPokemonDetailSuccess = (payload) => (
    dispatch(receivePokemonDetail(payload))
  );

  const createPokemonError = (error) => {
    console.log(error);
    dispatch(receivePokemonErrors(error));
  };

  const createPokemonSucc = (data) => {
    dispatch(receivePokemon(data));
    hashHistory.push(`pokemon/${data.id}`);
  };

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      console.log(`Middleware request all branch caught ${action.type}`);
      fetchAllPokemon(fetchAllPokemonSuccess);
      return next(action);

    case REQUEST_POKEMON_DETAIL:
      console.log(`Middleware request detail branch caught ${action.type}`);
      fetchPokemonDetail(action.id, fetchPokemonDetailSuccess);
      return next(action);

    case CREATE_POKEMON:
      console.log(`Middleware create branch caught ${action.type}`);
      createPokemon(action.formData, createPokemonSucc, createPokemonError);
      return next(action);

    default:
      console.log(`MW default caught action ${action.type}`);
      return next(action);
  }

};

export default PokemonMiddleware;
