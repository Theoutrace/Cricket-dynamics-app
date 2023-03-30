import React from "react";
import "./Matches.css";
import { useDispatch, useSelector } from "react-redux";
import HomeDisplayCards from "../../components/homepage diaplay cards/HomeDisplayCards";
import Box from "../../components/box/Box";
import SinglePlayerInList from "../players/SinglePlayerInList";
import { GameActions } from "../../Store/reducers/game-reducer";

const Matches = () => {
  const teams = useSelector((state) => state.game.teams);
  const matches = useSelector((state) => state.game.matches);
  const singleMatch = useSelector((state) => state.game.singleMatch);
  const dispatch = useDispatch();

  const submitSingleMatchInMatchsHandler = () => {
    if (singleMatch.length === 2) {
      const createSingleMatch = {
        teamA: singleMatch[0],
        teamB: singleMatch[1],
        id: Math.random().toString(),
      };

      dispatch(GameActions.addMatches([...matches, createSingleMatch]));
      dispatch(GameActions.singleMatch([]));
    } else {
      alert("We need 2 teams for a match");
    }
  };

  return (
    <div className="Matches-outer-component">
      <HomeDisplayCards className="matches-top-in-matches-page-for-box-containing-matches">
        <h2 className="matches-text-headline-for-each-heading-in-matches">
          All Matches
        </h2>
        {matches.length > 0 ? (
          <Box className="box-sec-matches-top-in-matches-page-for-flex">
            {matches.map((item) => {
              return <SinglePlayerInList item={{ ...item, isAMatch: true }} />;
            })}
          </Box>
        ) : (
          <Box className="box-sec-matches-top-in-matches-page-for-flex">
            <h2 className="box-sec-matches-top-in-matches-page-for-flex-h2">
              No Match Available
            </h2>
          </Box>
        )}
      </HomeDisplayCards>
      <HomeDisplayCards className="single-match-creator-pannel-in-matches-page-mid">
        {singleMatch.length > 0 ? (
          <Box className="Box-single-match-creator-pannel-in-matches-page-mid-before-submit">
            {singleMatch.map((item) => {
              return (
                <SinglePlayerInList
                  item={{
                    ...item,
                    isSingleMatch: true,
                    player: false,
                    inBucket: false,
                    inMatches: true,
                    inTeams: false,
                  }}
                />
              );
            })}
          </Box>
        ) : (
          <Box className="Box-single-match-creator-pannel-in-matches-page-mid-before-submit">
            <h2 className="h2-Box-single-match-creator-pannel-in-matches-page-mid-before-submit-h2">
              Select 2 teams from Teams pannel
            </h2>
          </Box>
        )}
        <button
          className="btn-single-match-creator-pannel-in-matches-page-mid-button"
          onClick={submitSingleMatchInMatchsHandler}
        >
          + Add Match
        </button>
      </HomeDisplayCards>
      <h2 className="Matches-outer-component-h2-on-teams-panel">
        Select Teams
      </h2>
      <HomeDisplayCards className="matches-homedisplay-teams-container-selector-lower-cls">
        {teams.length > 0 ? (
          <Box className="box-in-matches-homedisplay-teams-container-selector-lower-cls">
            {teams.map((item) => {
              return (
                <SinglePlayerInList
                  item={{
                    ...item,
                    player: false,
                    isTeam: true,
                    inMatches: true,
                    inBucket: false,
                    inTeams: false,
                  }}
                />
              );
            })}
          </Box>
        ) : (
          <Box className="box-in-matches-homedisplay-teams-container-selector-lower-cls">
            <h2 className="h2-no-teams-available-lower-matches-page">
              No teams available
            </h2>
          </Box>
        )}
      </HomeDisplayCards>
    </div>
  );
};

export default Matches;
