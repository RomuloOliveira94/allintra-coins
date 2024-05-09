import { configureStore } from "@reduxjs/toolkit";
import { favoriteCriptosSlice } from "./favoriteCriptoSlice";

const store = configureStore({
  reducer: {
    favoriteCriptos: favoriteCriptosSlice.reducer,
  },
});

export default store;
