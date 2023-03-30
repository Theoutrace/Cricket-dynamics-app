import React from "react";
import "./Box.css";

const Box = (props) => {
  return (
    <div className={`box-component-outer-default ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Box;
