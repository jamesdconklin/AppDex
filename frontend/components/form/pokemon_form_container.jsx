import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import {createPokemon} from '../../actions/pokemon_actions';
import {errorsReducer} from '../../reducers/errors_reducer';

const mapStateToProps = (state) => ({
  error: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (state) => dispatch(createPokemon(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
