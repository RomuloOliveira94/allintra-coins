import { createSlice } from "@reduxjs/toolkit";
import { CriptoData } from "./types";
import criptosJson from "../data/criptos.json";

const criptosRealtimeData: CriptoData = {
  data: [],
  criptosLastValues: new Map(),
};

export const criptosRealtimeDataSlice = createSlice({
  name: "criptosRealtimeData",
  initialState: criptosRealtimeData,
  reducers: {
    addRealTimeData: (state, action) => {
      const criptoAsset = criptosJson.find(
        (cripto) => cripto.symbol === action.payload.data.s.slice(0, -4)
      );

      const criptoImageUrl = criptoAsset?.icon;
      const criptoName = criptoAsset?.name;

      const calcPercentage = (
        oldValue: number | undefined,
        newValue: number
      ) => {
        if (!oldValue) return 0;
        return ((newValue - oldValue) / oldValue) * 100;
      };

      const percentage = calcPercentage(
        state.criptosLastValues.get(action.payload.data.s)?.price,
        action.payload.data.c
      );

      const { data } = action.payload;
      const { s, c, P } = data;
      const cripto = {
        name: s,
        price: c,
        priceChange: P,
        image: criptoImageUrl,
        symbol: s,
      };
      state.data.push(cripto);
      state.criptosLastValues.set(criptoName, {
        price: c,
        priceChange: P,
        realTimePriceColor:
          percentage < 0 ? "red" : percentage === 0 ? "white" : "green",
        image: criptoImageUrl,
        symbol: s,
      });
    },
  },
});

export const { addRealTimeData } = criptosRealtimeDataSlice.actions;
