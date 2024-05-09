import { configureStore } from "@reduxjs/toolkit";
import { favoriteCriptosSlice } from "./favoriteCriptoSlice";
import { criptosRealtimeDataSlice } from "./criptosRealTimeDataSlice";

const store = configureStore({
  reducer: {
    favoriteCriptos: favoriteCriptosSlice.reducer,
    criptosRealtimeData: criptosRealtimeDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
