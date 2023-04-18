import React from "react";
import Slider from "react-slick";

const VerticalSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: false,
    nextArrow: false,
    dotsClass: "flex flex-col justify-center",
  };

  return (
    <Slider {...settings} prevArrow={null} nextArrow={null} className="">
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
      <div>
        <h3>Slide 5</h3>
      </div>
    </Slider>
  );
};

export default VerticalSlider;
