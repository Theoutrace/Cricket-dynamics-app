import React, { lazy, Suspense } from "react";
import "./Home.css";
const HomeTeamsCard = lazy(() =>
  import("../../components/home teams card/HomeTeamsCard")
);
import playerIcon from "./images/playerIcon.png";
import teamIcon from "./images/teamIcon.png";
import matchIcon from "./images/matchIcon.png";
import { useSelector } from "react-redux";
const HeroSection = lazy(() =>
  import("../../components/hero section/HeroSection")
);

const Home = () => {
  const players = useSelector((state) => state.game.totalPlayers);
  const totalPlayers = useSelector((state) => state.game.totalPlayers);
  const teams = useSelector((state) => state.game.teams);
  const matches = useSelector((state) => state.game.matches);

  const remainingPlayers = totalPlayers.filter((item) => !item.selected);
  return (
    <div className="Home-outer-component">
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Player card loading...</div>}>
        <h2 className="Home-outer-component-h2">Players</h2>
        <HomeTeamsCard
          itemArray={players}
          buttonText={"Add Players"}
          topic={"Total Players"}
          className={"give-margin-bet-cards"}
          icon={playerIcon}
        />
      </Suspense>

      {remainingPlayers.length > 0 && (
        <>
          <Suspense fallback={<div>Second home card loading</div>}>
            <h2 className="Home-outer-component-h2">Remaining Players</h2>
            <HomeTeamsCard
              itemArray={remainingPlayers}
              buttonText={"Select Players"}
              topic={"Players Available"}
              className={"give-margin-bet-cards"}
              icon={playerIcon}
            />
          </Suspense>
        </>
      )}

      <Suspense fallback={<div>Teams section loading...</div>}>
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
      </Suspense>

      <Suspense fallback={<div>Matches section loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default Home;
