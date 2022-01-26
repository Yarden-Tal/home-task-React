import * as React from "react";
import { useState, useEffect, createContext, ReactNode } from "react";
// Services
import dataService from "../services/dataService";
// TS
import { IAppContext } from "../ts/interfaces/contextInterfaces";
import { coinType } from "../ts/types/types";

const defaultValue = {
  setCoins: () => undefined,
  coins: [],
};

export const AppContext = createContext<IAppContext>(defaultValue);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<coinType[]>([]);
  useEffect(() => {
    const getData = async (): Promise<void> => {
      const resData = await dataService.getCoins();
      const coins: coinType[] = resData.data.coins;
      console.log(coins);

      setCoins(coins);
      localStorage.setItem("coins", JSON.stringify(coins));
    };
    getData();
  }, []);

  return (
    <AppContext.Provider value={{ coins }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
