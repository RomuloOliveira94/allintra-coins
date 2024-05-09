import { createSlice } from "@reduxjs/toolkit";
import { FavoriteCriptos } from "./types";

const favoriteCriptos: FavoriteCriptos = {
  favoriteCriptos: ["BTCUSDT", "ETHUSDT", "SOLUSDT", "DOGEUSDT"],
  loading: false,
  error: null,
};

export const favoriteCriptosSlice = createSlice({
  name: "favoriteCriptos",
  initialState: favoriteCriptos,
  reducers: {
    addCripto: (state, action) => {
      state.favoriteCriptos.push(action.payload);
    },
    removeCripto: (state, action) => {
      state.favoriteCriptos = state.favoriteCriptos.filter(
        (cripto) => cripto !== action.payload
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addCripto, removeCripto, setLoading, setError } =
  favoriteCriptosSlice.actions;
