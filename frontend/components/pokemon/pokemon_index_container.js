import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import {requestAllPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
    pokemon: selectAllPokemon(state),
    loading: state.loading
});

const mapDispatchToProps = (dispatch) => {
  return {requestAllPokemon: () => dispatch(requestAllPokemon())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
