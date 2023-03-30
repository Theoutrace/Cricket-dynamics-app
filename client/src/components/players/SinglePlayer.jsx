import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = (props) => {
  return (
    <div className={`SinglePlayer-outer-component`}>
      {props.item.teamA && (
        <>
          <h6>{props.item.teamA.name}</h6>
          <p>Vs</p>
          <h6>{props.item.teamB.name}</h6>
        </>
      )}
      {props.item.teamMembers && props.item.name && (
        <>
          <h6>{props.item.name}</h6>
          <p>{props.item.teamMembers.length}</p>
        </>
      )}
      {props.item.name && props.item.speciality && (
        <>
          <h6>{props.item.name}</h6>
          <p>{props.item.speciality}</p>
        </>
      )}
    </div>
  );
};

export default SinglePlayer;
