import React from "react";
import "./HeroSection.css";
import heroImage from "./images/heroImage2.jpg";
import { Skeleton } from "@mui/material";

const HeroSection = () => {
  return (
    <div className="HeroSection-outer-component">
      <div className="hro-img-cont-div-sec">
        {heroImage ? (
          <img src={heroImage} alt="heroImage" />
        ) : (
          <Skeleton
            className="hro-img-cont-div-sec-img "
            variant="rounded"
            width={400}
            height={350}
            style={{ margin: "20px" }}
          />
        )}
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
      </div>
    </div>
  );
};

export default HeroSection;
