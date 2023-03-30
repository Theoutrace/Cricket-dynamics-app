import React from "react";
import HeroSection from "../../components/hero section/HeroSection";
import "./Home.css";
import HomeTeamsCard from "../../components/home teams card/HomeTeamsCard";
import playerIcon from "./images/playerIcon.png";
import teamIcon from "./images/teamIcon.png";
import matchIcon from "./images/matchIcon.png";
import { useSelector } from "react-redux";

const Home = () => {
  const players = useSelector((state) => state.game.totalPlayers);
  const totalPlayers = useSelector((state) => state.game.totalPlayers);
  const teams = useSelector((state) => state.game.teams);
  const matches = useSelector((state) => state.game.matches);

  const remainingPlayers = totalPlayers.filter((item) => !item.selected);
  return (
    <div className="Home-outer-component">
      <HeroSection />
      <h2 className="Home-outer-component-h2">Players</h2>
      <HomeTeamsCard
        itemArray={players}
        buttonText={"Add Players"}
        topic={"Total Players"}
        className={"give-margin-bet-cards"}
        icon={playerIcon}
      />

      {remainingPlayers.length > 0 && (
        <>
          <h2 className="Home-outer-component-h2">Remaining Players</h2>
          <HomeTeamsCard
            itemArray={remainingPlayers}
            buttonText={"Select Players"}
            topic={"Players Available"}
            className={"give-margin-bet-cards"}
            icon={playerIcon}
          />
        </>
      )}

      <h2 className="Home-outer-component-h2">Teams</h2>
      <HomeTeamsCard
        itemArray={teams}
        buttonText={"Add Teams"}
        topic={"Total Teams"}
        className={"give-margin-bet-cards"}
        totalClass={"teams-cls-for-total-cls-add"}
        singleItemCls={"teams-single-item-cls-for-total-cls-add"}
        icon={teamIcon}
      />
      <h2 className="Home-outer-component-h2">Matches</h2>
      <HomeTeamsCard
        itemArray={matches}
        buttonText={"Add Matches"}
        topic={"Total Matches"}
        className={"give-margin-bet-cards"}
        totalClass={"matches-cls-for-total-cls-add"}
        singleItemCls={"matches-single-item-cls-for-total-cls-add"}
        icon={matchIcon}
      />
    </div>
  );
};

export default Home;
