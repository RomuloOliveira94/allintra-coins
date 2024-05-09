export interface FavoriteCriptos {
  favoriteCriptos: string[];
  favoriteCriptosData: {
    name: string;
    symbol: string;
    image: string;
  }[];
  loading: boolean;
  error: string | null;
}

export interface CriptoData {
  data: {
    name: string;
    price: number;
    priceChange: number;
    image: string;
    symbol: string;
  }[];
  criptosLastValues: Map<
    string,
    {
      price: number;
      realTimePriceColor: string;
      priceChange: number;
      image: string;
      symbol: string;
      criptoName: string;
    }
  >;
}

export interface RootState {
  favoriteCriptos: FavoriteCriptos;
  criptosRealtimeData: CriptoData;
}
