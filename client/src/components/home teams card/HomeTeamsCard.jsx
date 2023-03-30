import React from "react";
import Box from "../box/Box";
import CarouselSlider from "../carousel/CarouselSlider";
import HomeDisplayCards from "../homepage diaplay cards/HomeDisplayCards";
import SinglePlayer from "../players/SinglePlayer";
import "./HomeTeamsCard.css";

const HomeTeamsCard = (props) => {
  return (
    <HomeDisplayCards
      className={`HomeDisplayCards-home-for-special-add ${props.className}`}
    >
      <Box className="all-player-container-box-home">
        <Box
          className={`allplayer-number-container-box-home ${props.totalClass}`}
        >
          <img src={props.icon} width="50px" />
          <h3>{props.topic}</h3>
          <h2>{props.itemArray && props.itemArray.length}</h2>
        </Box>
        <CarouselSlider>
          {props.itemArray.map((item) => {
            return (
              <Box
                className={`SinglePlayer-player-container-box-in-box ${props.singleItemCls}`}
              >
                <SinglePlayer key={Math.random().toString()} item={item} />
              </Box>
            );
          })}
        </CarouselSlider>
      </Box>
    </HomeDisplayCards>
  );
};

export default HomeTeamsCard;
