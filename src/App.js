import Navbar from "./Components/Navbar";
import MainBlogs from "./Components/MainBlogs";
import MoreBlogs from "./Components/MoreBlogs";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <MainBlogs />
      <MoreBlogs />
      <Footer />
    </div>
  );
}

export default App;
