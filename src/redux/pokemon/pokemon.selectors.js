export const getPokemonState = (state) => state?.pokemon || {};

export const getPokemonAllIds = (state) => getPokemonState(state)?.allIds || [];

export const getPokemonById = (state, id) =>
  getPokemonState(state)?.byId?.[id] || {};
