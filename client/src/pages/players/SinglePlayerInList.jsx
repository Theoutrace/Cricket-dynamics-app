import React, { useState } from "react";
import removeIcon from "./images/remove.png";
import remove2Icon from "./images/remove2.png";
import addIcon from "./images/add.png";
import Box from "../../components/box/Box";
import { useDispatch, useSelector } from "react-redux";
import { GameActions } from "../../Store/reducers/game-reducer";
import matchIcon from "./images/matchIcon.png";

const SinglePlayerInList = (props) => {
  const [show, setShow] = useState(false);
  const totalPlayers = useSelector((state) => state.game.totalPlayers);
  const playersBucket = useSelector((state) => state.game.playersBucket);
  const singleMatch = useSelector((state) => state.game.singleMatch);
  const matches = useSelector((state) => state.game.matches);
  const teams = useSelector((state) => state.game.teams);
  const dispatch = useDispatch();

  const showRemoveIconHandler = () => {
    setShow(() => true);
  };

  const hideMouseIconHandler = () => {
    setShow(() => false);
  };

  const removePlayerHandler = () => {
    const filteredList = totalPlayers.filter(
      (item) => item.name !== props.item.name
    );
    dispatch(GameActions.addPlayers([...filteredList]));
  };

  const addPlayerToBucketHandler = () => {
    dispatch(
      GameActions.playersBucket([
        ...playersBucket,
        { ...props.item, selected: true },
      ])
    );

    const updatedAllPlayers = totalPlayers.map((item) => {
      return item.name === props.item.name
        ? { ...props.item, selected: true, player: true }
        : item;
    });
    // console.log(updatedAllPlayers);

    dispatch(GameActions.addPlayers(updatedAllPlayers));
  };

  const removePlayerToBucketHandler = () => {
    const filteredList = playersBucket.filter(
      (item) => item.name !== props.item.name
    );
    dispatch(GameActions.playersBucket([...filteredList]));
    const updatedAllPlayers = totalPlayers.map((item) => {
      return item.name === props.item.name
        ? { ...props.item, selected: false, inBucket: false, player: true }
        : item;
    });
    // console.log(updatedAllPlayers);

    dispatch(GameActions.addPlayers([...updatedAllPlayers]));
  };

  const removeTeamHandler = () => {
    const filteredTeams = teams.filter((item) => item.name !== props.item.name);
    dispatch(GameActions.addTeams([...filteredTeams]));
  };

  const addTeamToMatchHandler = () => {
    if (singleMatch.length < 2) {
      if (singleMatch.length > 0 && singleMatch[0].name !== props.item.name) {
        dispatch(GameActions.singleMatch([...singleMatch, props.item]));
      } else {
        dispatch(GameActions.singleMatch([props.item]));
      }
    }
  };

  const removeTeamFromSingleMatchHandler = () => {
    //
    const filteredList = matches.filter((i) => i.id !== props.item.id);
    dispatch(GameActions.singleMatch(filteredList));
  };

  const removeMatchFromMatchesHandler = () => {
    console.log(matches);
    const filteredList = matches.filter((i) => i.id !== props.item.id);
    dispatch(GameActions.addMatches(filteredList));
  };
  return (
    <div
      onMouseEnter={showRemoveIconHandler}
      onMouseLeave={hideMouseIconHandler}
    >
      <Box
        className={`internal-singleplayer-all-Players-outer-component-page ${
          !props.item.player &&
          "internal-singleplayer-additional-cls-for-not-player"
        } ${
          props.item.inBucket && "in-bucket-player-cls-add-with-not-player"
        } ${props.item.inTeams && "in-created-teams-in-teams-page-top"} ${
          props.item.isSingleMatch &&
          "isSingleMatch-add-cls-for-single-match-in-matches-page-in-creator"
        } ${
          props.item.isAMatch &&
          "is-a-match-with-two-teams-in-match-pannel-in-matches"
        }`}
      >
        {!props.item.isAMatch && <h6>{props.item.name}</h6>}
        {props.item.isAMatch && (
          <>
            <h5 className="is-a-match-with-two-teams-in-match-pannel-in-matches-h5">
              {props.item.teamA.name}
            </h5>
            <img
              src={matchIcon}
              alt="matchIcon"
              className="is-a-match-with-two-teams-in-match-pannel-in-matches-img"
              style={{ position: "unset", width: "50px" }}
            />
            <h5 className="is-a-match-with-two-teams-in-match-pannel-in-matches-h5">
              {props.item.teamB.name}
            </h5>
          </>
        )}
        {props.item.speciality && <p>{props.item.speciality}</p>}
        {props.item.teamMembers && <p>{props.item.teamMembers.length}</p>}
        {show && props.item.player && (
          <img
            src={removeIcon}
            alt="removeIcon"
            onClick={removePlayerHandler}
          />
        )}

        {show &&
          !props.item.player &&
          !props.item.inBucket &&
          !props.item.inTeams &&
          !props.item.inMatches &&
          !props.item.isAMatch && (
            <img
              src={addIcon}
              alt="addIcon"
              onClick={addPlayerToBucketHandler}
            />
          )}

        {show &&
          !props.item.player &&
          props.item.inBucket &&
          !props.item.inTeams && (
            <div className="remove-icon-in-bucket-for-single-member">
              <img
                src={remove2Icon}
                alt="removeIcon"
                onClick={removePlayerToBucketHandler}
                className="remove-img-tag-cls-in-bucket-sngl-gl-itm"
              />
            </div>
          )}

        {show &&
          !props.item.player &&
          !props.item.inBucket &&
          props.item.inTeams &&
          !props.item.isAMatch && (
            <div className="remove-icon-in-teams-for-single-member">
              <img
                src={remove2Icon}
                alt="removeIcon"
                onClick={removeTeamHandler}
                className="remove-img-tag-cls-in-teams-sngl-gl-itm"
              />
            </div>
          )}

        {show &&
          !props.item.player &&
          !props.item.inBucket &&
          !props.item.inTeams &&
          props.item.inMatches &&
          !props.item.isAMatch && (
            <img src={addIcon} alt="addIcon" onClick={addTeamToMatchHandler} />
          )}

        {show &&
          !props.item.player &&
          !props.item.inBucket &&
          !props.item.inTeams &&
          props.item.isSingleMatch &&
          props.item.inMatches &&
          !props.item.isAMatch && (
            <div className="remove-icon-in-teams-for-single-member">
              <img
                src={remove2Icon}
                alt="removeIcon"
                onClick={removeTeamFromSingleMatchHandler}
                className="remove-img-tag-cls-in-teams-sngl-gl-itm"
              />
            </div>
          )}

        {show &&
          !props.item.player &&
          !props.item.inBucket &&
          !props.item.inTeams &&
          !props.item.isSingleMatch &&
          !props.item.inMatches &&
          props.item.isAMatch && (
            <div className="remove-icon-in-matches-for-single-match">
              <img
                src={remove2Icon}
                alt="removeIcon"
                onClick={removeMatchFromMatchesHandler}
                className="remove-img-matches-tag-cls-in-teams-sngl-gl-itm-img-img"
              />
            </div>
          )}
      </Box>
    </div>
  );
};

export default SinglePlayerInList;
