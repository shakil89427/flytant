import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Firebase/FirebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

initializeApp(firebaseConfig);
const database = getFirestore();

const Store = () => {
  /* Data States */
  const [carouselData, setCarouselData] = useState([]);
  const [mainBlogsData, setMainBlogsData] = useState([]);
  const [moreBlogsData, setMoreBlogsData] = useState([]);

  /* Loading States */
  const [carouselDataLoading, setCarouselDataLoading] = useState(true);
  const [mainBlogsDataLoading, setMainBlogsDataLoading] = useState(true);
  const [moreBlogsDataLoading, setMoreBlogsDataLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  /* Trigger Loading States */
  useEffect(() => {
    if (
      !carouselDataLoading &&
      !mainBlogsDataLoading &&
      !moreBlogsDataLoading
    ) {
      setLoading(false);
    }
  }, [carouselDataLoading, mainBlogsDataLoading, moreBlogsDataLoading]);

  /* Load CarouselData */
  useEffect(() => {
    const colRef = collection(database, "carousel");

    getDocs(colRef)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setCarouselData(data);
        setCarouselDataLoading(false);
      })
      .catch((err) => {
        setCarouselDataLoading(false);
        console.log(err);
      });
  }, []);

  /* Load MainBlogsData */
  useEffect(() => {
    const colRef = collection(database, "blogs");

    getDocs(colRef)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMainBlogsData(data);
        setMainBlogsDataLoading(false);
      })
      .catch((err) => {
        setMainBlogsDataLoading(false);
        console.log(err);
      });
  }, []);

  /* Load MoreBlogsData */
  useEffect(() => {
    const colRef = collection(database, "moreBlogs");

    getDocs(colRef)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setMoreBlogsData(data);
        setMoreBlogsDataLoading(false);
      })
      .catch((err) => {
        setMoreBlogsDataLoading(false);
        console.log(err);
      });
  }, []);

  return {
    carouselData,
    mainBlogsData,
    moreBlogsData,
    loading,
  };
};

export default Store;
