import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import leftIcon from "./images/leftIcon.png";
import "./CarouselSlider.css";

const CarouselSlider = (props) => {
  return (
    <Carousel
      transition={0.5}
      show={3}
      slide={2}
      swiping={true}
      responsive={false}
      useArrowKeys={true}
      rightArrow={
        <img src={leftIcon} alt="<" className="left-arrow-to-be-rotated" />
      }
      leftArrow={
        <img src={leftIcon} alt="<" className="left-arrow-to-be-designed" />
      }
      className={"Carousel-cls-in-slider-home-player"}
    >
      {props.children}
    </Carousel>
  );
};

export default CarouselSlider;
