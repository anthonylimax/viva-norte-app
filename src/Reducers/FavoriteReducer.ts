// src/slices/favoriteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  favorites: string[];
}

const initialState: FavoriteState = {
  favorites: ["123"],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      const id = state.favorites.indexOf(action.payload);
      if (id !== -1) {
        state.favorites.splice(id, 1);
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
