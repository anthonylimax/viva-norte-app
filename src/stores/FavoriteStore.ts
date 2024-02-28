import {configureStore} from "@reduxjs/toolkit"
import FavoriteReducer from "../Reducers/FavoriteReducer";

const favoriteStore = configureStore({
    reducer: {
        favorites: FavoriteReducer
    },
});

export default favoriteStore;


