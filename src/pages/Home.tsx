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

  if (!connection || loading) {
    return (
      <div className="p-3 flex flex-col items-center justify-center mt-6">
        <h1 className="text-2xl text-center my-2">
          Bem vindo(a) ao Allintra Coins
        </h1>

        <h2 className="text-lg text-center font-light">
          Acompanhe suas moedas favoritas em tempo real.
        </h2>

        <h3 className="text-lg text-center font-light">
          Conectando nos servidores...
        </h3>

        <div className="grid xl:grid-cols-4 gap-4 mt-6 w-full">
          {favoriteCriptos.map(([,], index) => (
            <div className="skeleton h-28 w-full" key={index}></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid p-3 mt-6">
      <h1 className="text-2xl text-center my-2">
        Bem vindo(a) ao Allintra Coins
      </h1>

      <h2 className="text-lg text-center font-light">
        Acompanhe suas moedas favoritas em tempo real.
      </h2>
      <p className="text-center my-2 font-light">*Flutuação na janela de 24h</p>
      <div className="grid xl:grid-cols-4 gap-4 mt-6 w-full">
        {Array.from(criptosLastValues)
          .sort()
          .filter(([key]) => favoriteCriptos.includes(key))
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
