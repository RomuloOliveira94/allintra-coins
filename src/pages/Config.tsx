import { useDispatch, useSelector } from "react-redux";
import Criptos from "../data/criptos.json";
import { RootState } from "../store/types";
import { addCripto, removeCripto } from "../store/favoriteCriptoSlice";
import { X } from "lucide-react";
import ThemeChanger from "../components/ThemeChanger";

const Config = () => {
  const dispatch = useDispatch();
  const { favoriteCriptosData } = useSelector(
    (state: RootState) => state.favoriteCriptos
  );
  const handleGetCripto = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addCripto(event.target.value));
  };

  const handleDeleteCripto = (cripto: string) => {
    dispatch(removeCripto(cripto));
  };

  return (
    <div className="grid gap-2 p-6 mt-6">
      <div className="my-2">
        <ThemeChanger />
      </div>
      <h1 className="text-xl font-bold text-center md:text-start">
        Configures suas moedas favoritas
      </h1>
      <small>
        *Algumas moedas podem não carregar corretamente ou estarem
        indisponíveis.
      </small>
      <select
        className="select select-bordered w-full max-w-md my-6 text-lg max-sm:mx-auto"
        name="criptos"
        onChange={handleGetCripto}
      >
        <option disabled defaultValue={""}>
          Selecione aqui.
        </option>
        {Criptos.sort((a, b) => a.name - b.name).map((cripto, index) => (
          <option key={index} value={cripto.symbol}>
            {cripto.name}
          </option>
        ))}
      </select>

      <div className="grid gap-4">
        <h2 className="text-xl font-semibold">Moedas favoritas:</h2>
        <ul>
          {favoriteCriptosData.map((cripto, index) => (
            <li
              key={index}
              className="flex items-center justify-between md:justify-start gap-2 text-lg"
            >
              {cripto.name}
              <span className="flex items-center justify-center border border-error rounded-full h-6 w-6">
                <X
                  size={20}
                  className="text-error cursor-pointer hover:opacity-50"
                  onClick={() => handleDeleteCripto(cripto.symbol)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Config;
