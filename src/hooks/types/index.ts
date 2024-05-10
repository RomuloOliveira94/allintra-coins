export interface RawCriptoData {
  e: string;
  E: number;
  s: string;
  p: string;
  P: string;
  w: string;
  x: string;
  c: string;
  Q: string;
  b: string;
  B: string;
  a: string;
  A: string;
  o: string;
  h: string;
  l: string;
  v: string;
  q: string;
  O: number;
  C: number;
  F: number;
  L: number;
  n: number;
}

export interface LastJsonMessage {
  stream: string;
  data: RawCriptoData;
}

export interface criptoData {
  name: string;
  price: string;
  priceChange: string;
  image: string;
  symbol: string;
}
