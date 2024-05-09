import { createSlice } from "@reduxjs/toolkit";

const favoriteCriptos = {
  criptos: ["BTCUSDT", "ETHUSDT", "SOLUSDT", "DOGEUSDT"],
  loading: false,
  error: null,
};

export const favoriteCriptosSlice = createSlice({
  name: "favoriteCriptos",
  initialState: favoriteCriptos,
  reducers: {
    addCripto: (state, action) => {
      state.criptos.push(action.payload);
    },
    removeCripto: (state, action) => {
      state.criptos = state.criptos.filter(
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
