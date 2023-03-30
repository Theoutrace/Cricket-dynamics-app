import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Players from "./pages/players/Players";
import Teams from "./pages/teams/Teams";
import Matches from "./pages/matches/Matches";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </div>
  );
}

export default App;
