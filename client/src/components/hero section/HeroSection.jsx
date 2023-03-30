import React from "react";
import "./HeroSection.css";
import heroImage from "./images/heroImage.png";

const HeroSection = () => {
  return (
    <div className="HeroSection-outer-component">
      <div className="hro-img-cont-div-sec">
        <img src={heroImage} alt="heroImage" />
      </div>
      <div className="welcome-hero-sec-intro">
        <h1>
          Welcome to <span>Cricket Dynamics</span>, the ultimate platform for
          cricket enthusiasts!
        </h1>
        <h2>
          Do you dream of assembling your own team of cricket stars and leading
          them to victory? Look no further, because our website allows you to do
          just that! With our easy-to-use interface, you can choose from a vast
          pool of players to create your own dream team. Whether you want to
          include legends of the game or up-and-coming talents, the choice is
          yours.
        </h2>
        <button>Create Player</button>
      </div>
    </div>
  );
};

export default HeroSection;
