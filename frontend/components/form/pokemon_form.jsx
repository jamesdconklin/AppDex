import React from 'react';

const TYPES = [
    "fire",
    "electric",
    "normal",
    "ghost",
    "psychic",
    "water",
    "bug",
    "dragon",
    "grass",
    "fighting",
    "ice",
    "flying",
    "poison",
    "ground",
    "rock",
    "steel",
    "fairy"
];

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {"pokemon[image_url]": "/assets/pokemon_snaps/136.png",
                  "pokemon[item_ids][]":[],
                  "pokemon[moves][]": [],
                "pokemon[poke_type]":TYPES[0]};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log("SUBMIT:");
    console.log(e);
    e.preventDefault();
    console.log("Form State");
    console.log(this.state);
    this.props.createPokemon(this.state);
  }

  update(prop) {
    return e => {
      console.log(prop);
      let val;
      if (prop.match(/\[\]$/)) {
        console.log("Append");
        val = this.state[prop].concat(e.target.value);
      } else {
        val = e.target.value;
      }
      this.setState({[prop]: val});
    };
  }

  _inputText(displayName, valueName){
    return (
      <input type="text" key={valueName}
        name={valueName}
        placeholder={displayName}
        onChange={this.update(valueName)}
        />
    );
  }

  _errors() {
    // if (this.props.error.length) {
    //   window.alert(this.props.error.map(
    //     err => `- ${err}`
    //   ).join("\n"));
    // }
    // return <div/>;
    return (
      <ul>
        {this.props.error.map(
          err => <li key={err}>{err}</li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <section className="form-container">
        <form className="new-pokemon"
              onSubmit={this.handleSubmit}
        >

          {this._inputText("name", "pokemon[name]")}
          {this._inputText("Image URL", "pokemon[image_url]")}
          <select name="pokemon[poke_type]" onChange={this.update("pokemon[poke_type]")}>
            {TYPES.map(
              (type) => <option key={type} value={type}>{type}</option>
            )}
          </select>
          {this._inputText("Attack", "pokemon[attack]")}
          {this._inputText("Defense", "pokemon[defense]")}
          {this._inputText("First Move", "pokemon[moves][1]")}
          {this._inputText("Second Move", "pokemon[moves][2]")}
          {this._inputText("Third Move", "pokemon[moves][3]")}
          {this._inputText("Fourth Move", "pokemon[moves][4]")}
          <input type="hidden" name="pokemon[item_ids][]" value=""></input>
          <input type="hidden" name="pokemon[image_url]"
            value="/assets/pokemon_snaps/136.png"></input>
          <button>Submit</button>
        </form>
        {this._errors()}
    </section>

    );
  }
}

export default PokemonForm;
