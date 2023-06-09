import React, { lazy, Suspense, useRef } from "react";
import "./Players.css";
const HomeDisplayCards = lazy(() =>
  import("../../components/homepage diaplay cards/HomeDisplayCards")
);
import Box from "../../components/box/Box";
const SinglePlayerInList = lazy(() => import("./SinglePlayerInList"));
import { useDispatch, useSelector } from "react-redux";
import { GameActions } from "../../Store/reducers/game-reducer";

const Players = () => {
  const totalPlayers = useSelector((state) => state.game.totalPlayers);
  const dispatch = useDispatch();
  const playerNameRef = useRef();
  const playerSpecilityRef = useRef();

  const addplayerhandler = (e) => {
    e.preventDefault();

    if (
      playerNameRef.current.value.length > 0 &&
      playerSpecilityRef.current.value.length > 0
    ) {
      const playerDetails = {
        name: playerNameRef.current.value,
        speciality: playerSpecilityRef.current.value,
        selected: false,
        player: true,
      };

      dispatch(GameActions.addPlayers([...totalPlayers, playerDetails]));
    } else {
      alert("Fill the form correctly");
    }

    playerNameRef.current.value = "";
    playerSpecilityRef.current.value = "";
  };

  return (
    <div className="Players-outer-component-page">
      <Box className="box-in-player-heading-div-cnot-h1-p">
        <h1>All Players</h1>
        <p>
          Add your own player name and create a gamewide tracker for each
          player.
        </p>
      </Box>
      <Suspense fallback={<div>Player display loading...</div>}>
        <HomeDisplayCards className="player-div-comp-imp-cmn-sec">
          <Box
            className={
              "flex-all-player-coontainer-Players-component-page unscroll-div-container"
            }
          >
            <Box className="form-container-div-player-page">
              <form onSubmit={addplayerhandler}>
                <input
                  placeholder="Player Name"
                  type="text"
                  ref={playerNameRef}
                />
                <input
                  placeholder="Specility"
                  type="text"
                  ref={playerSpecilityRef}
                />
                <button type="submit">+ Add Player</button>
              </form>
            </Box>
          </Box>
          {totalPlayers.length > 0 ? (
            <Box
              className={`flex-all-player-coontainer-Players-component-page ${
                totalPlayers.length > 5 && "flex-page-for-scroll"
              }`}
            >
              {totalPlayers.map((item) => {
                return (
                  <Suspense fallback={<div>Loading...</div>}>
                    <SinglePlayerInList item={item} />
                  </Suspense>
                );
              })}
            </Box>
          ) : (
            <Box
              className={`flex-all-player-coontainer-Players-component-page`}
            >
              <h3>No Player Available</h3>
            </Box>
          )}
        </HomeDisplayCards>
      </Suspense>
    </div>
  );
};

export default Players;
