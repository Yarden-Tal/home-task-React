import * as React from "react";
import { useState, useEffect, createContext, ReactNode } from "react";
// TS
import { IAppContext } from "../ts/interfaces/contextInterfaces";
import { coinType } from "../ts/types/types";

const defaultValue = {
  setCoins: () => undefined,
};

export const AppContext = createContext<IAppContext>(defaultValue);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<coinType[]>();
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
