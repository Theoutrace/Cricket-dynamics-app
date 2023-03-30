import React, { lazy, Suspense, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "../../components/box/Box";
const HomeDisplayCards = lazy(() =>
  import("../../components/homepage diaplay cards/HomeDisplayCards")
);
const SinglePlayerInList = lazy(() => import("../players/SinglePlayerInList"));

import { GameActions } from "../../Store/reducers/game-reducer";
import "./Teams.css";

const Teams = () => {
  const totalPlayers = useSelector((state) => state.game.totalPlayers);
  const playersBucket = useSelector((state) => state.game.playersBucket);
  const teams = useSelector((state) => state.game.teams);
  const dispatch = useDispatch();
  const teamNameRef = useRef();

  const teamNameSubmitHandler = (e) => {
    e.preventDefault();
    if (playersBucket.length > 0 && teamNameRef.current.value.length > 0) {
      const createTeam = {
        name: teamNameRef.current.value,
        teamMembers: playersBucket,
      };

      dispatch(GameActions.addTeams([...teams, createTeam]));
      dispatch(GameActions.playersBucket([]));
      teamNameRef.current.value = "";
    } else {
      alert("To create a team, we need a name and atleast one member");
    }
  };

  return (
    <div className="Teams-outer-component">
      <Suspense fallback={<div>Loading...</div>}>
        <HomeDisplayCards
          className={`teams-container-aft-creation-in-teams-page-outer`}
        >
          <h2 className="teams-container-aft-creation-in-teams-page-outer-h2">
            All Teams
          </h2>
          {teams.length > 0 ? (
            <Box
              className={`box-all-teams-container-aft-creation-in-teams-page`}
            >
              {teams.map((item) => {
                return (
                  <SinglePlayerInList
                    item={{ ...item, player: false, inTeams: true }}
                  />
                );
              })}
            </Box>
          ) : (
            <Box
              className={`box-all-teams-container-aft-creation-in-teams-page`}
            >
              <div>
                <h2>No teams available, Fill the form and create some.</h2>
                <p>We need atleast 2 teams to organise a match.</p>
              </div>
            </Box>
          )}
        </HomeDisplayCards>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <h2 className="h2-all-player-txt">Create Teams</h2>
        <HomeDisplayCards className={`HomeDisplayCards-in-teams-component`}>
          <Box
            className={
              "box-under-HomeDisplayCards-in-teams-component-box-for-form"
            }
          >
            <form onSubmit={teamNameSubmitHandler}>
              <input placeholder="Team Name" ref={teamNameRef} />
              {playersBucket.length > 0 ? (
                <Box
                  className={`player-bucket-right-in-teams-cmp-nnt ${
                    playersBucket.length > 6 && "add-to-scroll-bucket"
                  }`}
                >
                  {playersBucket.map((item) => {
                    return (
                      <Suspense fallback={<div>Loading...</div>}>
                        <SinglePlayerInList
                          item={{
                            ...item,
                            player: false,
                            inBucket: true,
                            selected: true,
                          }}
                        />
                      </Suspense>
                    );
                  })}
                </Box>
              ) : (
                <Box
                  className={`player-bucket-right-in-teams-cmp-nnt ${
                    playersBucket.length > 6 && "add-to-scroll-bucket"
                  }`}
                >
                  <h6>No player selected, select any player!</h6>
                </Box>
              )}
              <button>+ Add Team</button>
            </form>
          </Box>
        </HomeDisplayCards>
      </Suspense>

      <h6 className="h2-all-player-txt">Available Players</h6>
      <p className="Teams-outer-component-p">
        Select players of your choice, Create your own team
      </p>
      {totalPlayers.length > 0 ? (
        <Box className="selector-section-in-teams-page">
          {totalPlayers.map((item) => {
            if (!item.selected) {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <SinglePlayerInList item={{ ...item, player: false }} />
                </Suspense>
              );
            }
          })}
        </Box>
      ) : (
        <h2 className="Teams-outer-component-h2">
          No Player Available, add some!
        </h2>
      )}
    </div>
  );
};

export default Teams;
