import React from 'react';
import ReactDOM from 'react-dom';

import {fetchAllPokemon} from './util/api_util';
import * as actionUtil from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.fetchAllPokemon = fetchAllPokemon;
  window.actionUtil = actionUtil;
  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
});
