import { useEffect, useState } from "react";
import { LastJsonMessage } from "./types";
import useWebSocket from "react-use-websocket";
import { useDispatch } from "react-redux";
import { addRealTimeData } from "../store/criptosRealTimeDataSlice";

const useFetchCriptoData = (favoriteCriptos: string[]) => {
  const dispatch = useDispatch();
  const [connection, setConnection] = useState(false);
  const [loading, setLoading] = useState(true);

  const favoriteCriptosUrl =
    favoriteCriptos.join("@ticker/").toLowerCase() + "@ticker";

  const { lastJsonMessage }: { lastJsonMessage: LastJsonMessage } =
    useWebSocket(
      `wss://stream.binance.com:9443/stream?streams=${favoriteCriptosUrl}`,
      {
        onOpen: () => {
          console.log("Conectado a binance com sucesso!");
          setLoading(false);
          setConnection(true);
        },
        onClose: () => console.log("Conexão encerrada!"),
        onError: (event) => {
          console.error("error", event);
          setConnection(false);
        },
        shouldReconnect: () => true,
        reconnectInterval: 3000,
      }
    );

  useEffect(() => {
    if (lastJsonMessage) {
      dispatch(addRealTimeData(lastJsonMessage));
    }
  }, [lastJsonMessage, dispatch]);

  return { connection, loading };
};

export default useFetchCriptoData;
