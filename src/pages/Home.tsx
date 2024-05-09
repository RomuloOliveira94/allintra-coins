import { useSelector } from "react-redux";
import CriptoCard from "../components/CriptoCard";
import { RootState } from "../store/types";
import useFetchCriptoData from "../hooks/useFetchCriptoData";

const Home = () => {
  const { favoriteCriptos } = useSelector(
    (state: RootState) => state.favoriteCriptos
  );
  const { connection, loading } = useFetchCriptoData(favoriteCriptos);
  const { criptosLastValues } = useSelector(
    (state: RootState) => state.criptosRealtimeData
  );

  console.log(criptosLastValues);

  if (!connection || loading) {
    return (
      <div className="p-3">
        <h1 className="text-2xl text-center my-2">
          Bem vindo ao Allintra Coins
        </h1>

        <h2 className="text-lg text-center font-light">
          Dados de suas moedas favoritas em tempo real.
        </h2>

        <h3 className="text-lg text-center font-light">
          Conectando nos servidores...
        </h3>
      </div>
    );
  }

  return (
    <div className="p-3">
      <h1 className="text-2xl text-center my-2">Bem vindo ao Allintra Coins</h1>

      <h2 className="text-lg text-center font-light">
        Acompanhe suas moedas favoritas em tempo real.
      </h2>

      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {Array.from(criptosLastValues)
          .sort()
          .map(([key, value], index) => (
            <CriptoCard
              key={index}
              name={value.criptoName}
              symbol={key}
              price={value.price}
              image={value.image}
              priceColor={value.realTimePriceColor}
              priceChange={value.priceChange}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
