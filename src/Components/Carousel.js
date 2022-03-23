import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStore from "../Store/useStore";
import { carouselStyles } from "../Styles/Styles";

const Carousel = () => {
  const { carouselData } = useStore();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    slidesToShow: 1,
  };

  return (
    <div className={carouselStyles.main}>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id}>
            <img
              className={carouselStyles.img}
              src={item.imageUrls[0]}
              alt=""
            />
            <div className={carouselStyles.infoMain}>
              <h1 className={carouselStyles.title}>{item.title}</h1>
              <div className={carouselStyles.additional}>
                <p>4 min read</p>
                <p className={carouselStyles.date}>
                  {new Date(item.time?.toDate()).toDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
