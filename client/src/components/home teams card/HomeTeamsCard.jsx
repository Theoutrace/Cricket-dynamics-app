import React, { lazy, Suspense } from "react";
import Box from "../box/Box";
// import CarouselSlider from "../carousel/CarouselSlider";
const CarouselSlider = lazy(() => import("../carousel/CarouselSlider"));
// import HomeDisplayCards from "../homepage diaplay cards/HomeDisplayCards";
const HomeDisplayCards = lazy(() =>
  import("../homepage diaplay cards/HomeDisplayCards")
);
// import SinglePlayer from "../players/SinglePlayer";
const SinglePlayer = lazy(() => import("../players/SinglePlayer"));
import "./HomeTeamsCard.css";

const HomeTeamsCard = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <Suspense fallback={<div>Loading carousel...</div>}>
            <CarouselSlider>
              {props.itemArray.map((item) => {
                return (
                  <Box
                    className={`SinglePlayer-player-container-box-in-box ${props.singleItemCls}`}
                  >
                    <Suspense fallback={<div>Single player loading...</div>}>
                      <SinglePlayer
                        key={Math.random().toString()}
                        item={item}
                      />
                    </Suspense>
                  </Box>
                );
              })}
            </CarouselSlider>
          </Suspense>
        </Box>
      </HomeDisplayCards>
    </Suspense>
  );
};

export default HomeTeamsCard;
