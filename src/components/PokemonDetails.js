import React from "react";
import { connect } from "react-redux";
import { getPokemonById } from "../redux/pokemon/pokemon.selectors";

export function PokemonDetails({ pokemon }) {
  return <li>{pokemon.name}</li>;
}

export default connect((state, ownProps) => ({
  pokemon: getPokemonById(state, ownProps.id),
}))(PokemonDetails);
