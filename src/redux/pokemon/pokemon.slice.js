import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon } from "../../services/pokeApi";
import { transformIndexById } from "./pokemon.helpers";

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const res = await getPokemon();
    return res;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPokemon.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPokemon.fulfilled]: (state, action) => {
      state.byId = transformIndexById(action.payload);
      state.allIds = action.payload.map((pokemon) => pokemon.id);
      state.isLoading = false;
    },
    [fetchPokemon.rejected]: () => {},
  },
});

export default pokemonSlice.reducer;
