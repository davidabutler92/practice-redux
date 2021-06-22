export const SET_POKEMON = "SET_POKEMON";
export const setPokemon = (pokemon) => {
  return {
    type: SET_POKEMON,
    payload: pokemon,
  };
};
