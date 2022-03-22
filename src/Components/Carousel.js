import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselStyles } from "../Styles/Styles";

const Carousel = () => {
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
        <div>
          <img
            className={carouselStyles.img}
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FHow%20Metaverse%20will%20Shape%20Influencer%20Marketing%3F%2F1%20(1).png?alt=media&token=a7a6c200-dab1-4e90-8f2e-f834fd975a3b"
            alt=""
          />
          <div className={carouselStyles.infoMain}>
            <h1 className={carouselStyles.title}>
              How Big is the Influencer Marketing Industry?
            </h1>
            <div className={carouselStyles.additional}>
              <p>4 min read</p>
              <p className={carouselStyles.date}>Mar 1,2022</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className={carouselStyles.img}
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FHow%20Big%20is%20the%20Influencer%20Marketing%20Industry%3F%2F1%20(2).jpg?alt=media&token=04d5c3ab-6a5a-48c3-981e-36d7ee6dfa6d"
            alt=""
          />
          <div className={carouselStyles.infoMain}>
            <h1 className={carouselStyles.title}>
              How Much ROI Brands Get with Influencer Marketing?
            </h1>
            <div className={carouselStyles.additional}>
              <p>4 min read</p>
              <p className={carouselStyles.date}>Mar 1,2022</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className={carouselStyles.img}
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FWhy%20Influencer%20Marketing%20Works%3F%2F1%20(2).png?alt=media&token=4ad85db5-025c-43d8-89b3-ce2e4792d85e"
            alt=""
          />
          <div className={carouselStyles.infoMain}>
            <h1 className={carouselStyles.title}>
              How Metaverse will Shape Influencer Marketing?
            </h1>
            <div className={carouselStyles.additional}>
              <p>4 min read</p>
              <p className={carouselStyles.date}>Mar 1,2022</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
