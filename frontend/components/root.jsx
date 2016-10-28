import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './item/item_detail_container';
import PokemonFormContainer from './form/pokemon_form_container';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {requestAllPokemon, requestPokemonDetail} from '../actions/pokemon_actions';


const Root = ({store}) => {
  const indexLoad = () => store.dispatch(requestAllPokemon());
  const detailLoad = (state) => store.dispatch(requestPokemonDetail(state.params.id));

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={indexLoad}>
          <IndexRoute component={PokemonFormContainer}/>
          <Route path="pokemon/:id"
            component={PokemonDetailContainer}
            onEnter={detailLoad}>
            <Route path="item/:itemId" component={ItemDetailContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
