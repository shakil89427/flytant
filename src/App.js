import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import MainBlogs from "./Components/MainBlogs";
import MoreBlogs from "./Components/MoreBlogs";
import Footer from "./Components/Footer";
import useStore from "./Store/useStore";
import { appStyles } from "./Styles/Styles";

function App() {
  const { loading } = useStore();

  return (
    <div>
      <Navbar />
      {!loading ? (
        <div className={appStyles.container}>
          <Carousel />
          <MainBlogs />
          <MoreBlogs />
          <Footer />
        </div>
      ) : (
        <h1 className={appStyles.loading}>Loading...</h1>
      )}
    </div>
  );
}

export default App;
