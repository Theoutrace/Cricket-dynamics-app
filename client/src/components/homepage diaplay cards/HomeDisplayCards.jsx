import React from "react";
import Box from "../box/Box";
import "./HomeDisplayCards.css";

const HomeDisplayCards = (props) => {
  return (
    <Box className={`HomeDisplayCards-container-box-home ${props.className}`}>
      {props.children}
    </Box>
  );
};

export default HomeDisplayCards;
