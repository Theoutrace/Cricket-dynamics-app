import { createSlice } from "@reduxjs/toolkit";

const GameSlice = createSlice({
  name: "game",
  initialState: {
    totalPlayers: [],
    getPlayer: false,
    getRemainingPlayers: false,
    playersBucket: [],
    teams: [],
    getTeams: false,
    matches: [],
    getMatches: false,
    singleMatch: [],
  },
  reducers: {
    addPlayers(state, action) {
      state.totalPlayers = action.payload;
    },
    getPlayers(state, action) {
      state.getPlayer = !state.getPlayer;
    },
    remainingPlayers(state, payload) {
      state.remainingPlayers = action.payload;
    },
    getRemainingPlayers(state, payload) {
      state.getRemainingPlayers = !state.getRemainingPlayers;
    },
    playersBucket(state, action) {
      state.playersBucket = action.payload;
    },
    addTeams(state, action) {
      state.teams = action.payload;
    },
    getTeams(state, action) {
      state.getTeams = !state.getTeams;
    },

    addMatches(state, action) {
      state.matches = action.payload;
    },
    getMatches(state, action) {
      state.getMatches = !state.getMatches;
    },
    singleMatch(state, action) {
      state.singleMatch = action.payload;
    },
  },
});

export const GameActions = GameSlice.actions;
export default GameSlice.reducer;
