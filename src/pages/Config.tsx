import { useDispatch, useSelector } from "react-redux";
import Criptos from "../data/criptos.json";
import { RootState } from "../store/types";
import { addCripto, removeCripto } from "../store/favoriteCriptoSlice";
import { X } from "lucide-react";

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
    <div className="grid gap-2 p-6">
      <h1 className="text-xl font-bold text-center">
        Configures suas moedas favoritas
      </h1>
      <select
        className="select select-bordered w-full max-w-md my-6 text-lg mx-auto" 
        name="criptos"
        onChange={handleGetCripto}
      >
        <option disabled defaultValue={""}>
          Selecione aqui.
        </option>
        {Criptos.map((cripto, index) => (
          <option key={index} value={cripto.symbol}>
            {cripto.name}
          </option>
        ))}
      </select>

      <div className="grid gap-4 items-center">
        <h2 className="text-xl font-semibold">Moedas favoritas:</h2>
        <ul>
          {favoriteCriptosData.map((cripto, index) => (
            <li key={index} className="flex items-center justify-between gap-2 text-lg">
              {cripto.name}
              <span className="flex items-center ">
                <X
                  size={20}
                  className="text-error mb-1 cursor-pointer hover:opacity-50"
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
