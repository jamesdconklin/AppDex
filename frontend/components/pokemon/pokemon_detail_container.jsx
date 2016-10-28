import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestPokemonDetail} from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
    pokemonDetail: state.pokemonDetail
    // children: state.children;
});

const mapDispatchToProps = (dispatch) => {
  return {requestPokemonDetail: (id) => dispatch(requestPokemonDetail(id))};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
