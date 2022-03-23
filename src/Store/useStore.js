import { useContext } from "react";
import { StoreContext } from "./StoreProvider";

const useStore = () => {
  return useContext(StoreContext);
};

export default useStore;
