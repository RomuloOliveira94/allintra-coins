import CriptoCard from "../components/CriptoCard";

const Home = () => {
  return (
    <div className="p-3">
      <h1 className="text-2xl text-center my-2">Bem vindo ao Allintra Coins</h1>

      <h2 className="text-lg text-center font-light">
        Dados de suas moedas favoritas em tempo real.
      </h2>

      <CriptoCard
        name="Bitcoin"
        symbol="BTC"
        price={50000}
        marketCap={1000000000}
        volume={1000000}
        image="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
        priceChange={2}
      />
    </div>
  );
};

export default Home;
