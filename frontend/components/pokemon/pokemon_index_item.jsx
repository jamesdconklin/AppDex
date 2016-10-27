import React from 'react';
import {withRouter} from 'react-router';

class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let {pokemon} = this.props;
    return (
      <li className='dex-entry'
        onClick={this.handleClick}>
        <img src={pokemon.image_url}/>
        {pokemon.name}
      </li>
    );
  }

  handleClick(e){
    this.props.router.push(`/pokemon/${this.props.pokemon.id}`);
  }


}

export default withRouter(PokemonIndexItem);
