import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase/FirebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

initializeApp(firebaseConfig);
const database = getFirestore();

const Store = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [mainBlogsData, setMainBlogsData] = useState([]);
  const [moreBlogsData, setMoreBlogsData] = useState([]);

  /* Load CarouselData */
  useEffect(() => {
    const colRef = collection(database, "carousel");
    getDocs(colRef).then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setCarouselData(data);
    });
  }, []);

  /* Load MainBlogsData */
  useEffect(() => {
    const colRef = collection(database, "blogs");
    getDocs(colRef).then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setMainBlogsData(data);
    });
  }, []);

  /* Load MoreBlogsData */
  useEffect(() => {
    const colRef = collection(database, "moreBlogs");
    getDocs(colRef).then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setMoreBlogsData(data);
    });
  }, []);

  return {
    carouselData,
    mainBlogsData,
    moreBlogsData,
  };
};

export default Store;
