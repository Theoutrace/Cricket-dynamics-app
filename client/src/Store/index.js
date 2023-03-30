import { configureStore } from "@reduxjs/toolkit";
import gamereducer from "./reducers/game-reducer";

const Store = configureStore({
  reducer: {
    game: gamereducer,
  },
});

export default Store;
