import pokemonMiddleware from './pokemon_middleware';
import {applyMiddleware} from 'redux';

const masterMiddleware = applyMiddleware(
  pokemonMiddleware
);

export default masterMiddleware;
