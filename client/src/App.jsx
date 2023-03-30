import "./App.css";
import { lazy, Suspense } from "react";
import loader from "./assets/loader.gif";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
const Home = lazy(() => import("./pages/home/Home"));
const Players = lazy(() => import("./pages/players/Players"));
const Teams = lazy(() => import("./pages/teams/Teams"));
const Matches = lazy(() => import("./pages/matches/Matches"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense
        fallback={
          <div className="loader-container-giv-fallback">
            <img src={loader} alt="loading..." />
            <h2 className="loader-container-giv-fallback-h2">Loading...</h2>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
