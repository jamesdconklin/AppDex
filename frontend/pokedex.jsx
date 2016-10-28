import React from 'react';
import ReactDOM from 'react-dom';

import {createPokemon} from './util/api_util';
import * as actionUtil from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.actionUtil = actionUtil;
  window.createPokemon = createPokemon;
  window.store = store;
  window.sample = {
    'pokemon[name]': "Foo",
    'pokemon[attack]': 35,
    'pokemon[defense]': 35,
    'pokemon[moves]': ['foo', 'bar'],
    'pokemon[item_ids]': [],
    'pokemon[poke_type]': 'fighting',
    'pokemon[image_url]': '/assets/pokemon_snaps/006.png'
  };
});
