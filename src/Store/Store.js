import { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase/FirebaseConfig";
import { getFirestore, collection } from "firebase/firestore";

initializeApp(firebaseConfig);
const database = getFirestore();

const Store = () => {
  const [data, setData] = useState([]);

  return {
    data,
  };
};

export default Store;
