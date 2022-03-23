import React, { createContext } from "react";
import Store from "./Store";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const storeValue = Store();
  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
