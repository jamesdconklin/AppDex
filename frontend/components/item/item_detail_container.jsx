import {connect} from 'react-redux';
import ItemDetail from './item_detail';
// import {requestItemDetail} from '../../actions/item_actions';
import {selectPokemonItem} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let itemId = ownProps.params.itemId;
  return {item: selectPokemonItem(state, itemId)};
};


export default connect(
  mapStateToProps
)(ItemDetail);
