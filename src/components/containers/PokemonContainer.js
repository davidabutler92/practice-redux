import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPokemonAllIds } from "../../redux/pokemon/pokemon.selectors";
import { fetchPokemon } from "../../redux/pokemon/pokemon.slice";
import PokemonDetails from "../PokemonDetails";

export function PokemonContainer({ allIds, fetchPokemon }) {
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <ul>
      {allIds.map((id) => (
        <PokemonDetails key={id} id={id} />
      ))}
    </ul>
  );
}

export default connect(
  (state, ownProps) => ({ allIds: getPokemonAllIds(state) }),
  { fetchPokemon }
)(PokemonContainer);
