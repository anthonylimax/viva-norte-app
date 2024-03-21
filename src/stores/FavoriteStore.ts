import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from "../Reducers/FavoriteReducer";
import LoggedReducer from "../Reducers/LoggedReducer";

const favoriteStore = configureStore({
  reducer: {
    favorites: FavoriteReducer,
    logged: LoggedReducer,
  },
});

export default favoriteStore;
