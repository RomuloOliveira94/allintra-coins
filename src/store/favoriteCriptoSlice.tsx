import { createSlice } from "@reduxjs/toolkit";
import { FavoriteCriptos } from "./types";
import criptosJson from "../data/criptos.json";

const standartCriptos = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "DOGEUSDT"];
const standartCriptosData = standartCriptos.map((cripto) =>
  criptosJson.find((c) => c.symbol === cripto.split("USDT")[0])
);

const favoriteCriptos: FavoriteCriptos = {
  favoriteCriptos: standartCriptos,
  favoriteCriptosData: standartCriptosData,
  loading: false,
  error: null,
};

export const favoriteCriptosSlice = createSlice({
  name: "favoriteCriptos",
  initialState: favoriteCriptos,
  reducers: {
    addCripto: (state, action) => {
      state.favoriteCriptos.push(`${action.payload}USDT`);
      state.favoriteCriptosData.push(
        criptosJson.find((c) => c.symbol === action.payload)
      );
    },
    removeCripto: (state, action) => {
      state.favoriteCriptos.splice(
        state.favoriteCriptos.indexOf(`${action.payload}USDT`),
        1
      );
      state.favoriteCriptosData = state.favoriteCriptosData.filter(
        (cripto) => cripto.symbol !== action.payload
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
