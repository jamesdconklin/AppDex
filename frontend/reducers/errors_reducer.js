import {RECEIVE_POKEMON_ERRORS} from '../actions/pokemon_actions';

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
    console.log("Error reducer caught action.");
    console.log(action);
      return JSON.parse(action.error.responseText).error;
    default:
      console.log(`Error default caught ${action.type}`);
      return state;
  }
};


export default errorsReducer;
