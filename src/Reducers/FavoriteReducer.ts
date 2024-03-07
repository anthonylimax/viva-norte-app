// src/slices/favoriteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnnouncementDTO } from "../DTOs/announcement.type";

interface FavoriteState {
  favorites: string[];
  announcements: AnnouncementDTO[],
  notification: any[]
}

const initialState: FavoriteState = {
  favorites: [],
  announcements: [],
  notification: [
    {
      title: "Super Desconto!",
      description: "Baixou o preço dos imóveis nas Graças, Recife-PE. Confira",
      name: "tag"
    },
    {
      title: "Super Desconto!",
      description: "Baixou o preço dos imóveis nas Graças, Recife-PE. Confira",
      name: "tag"
    },
  ]
}

const favoriteSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    addAllAnnouncements: (state, action: PayloadAction<AnnouncementDTO[]>) =>{
      action.payload.forEach((element : AnnouncementDTO) => {
        state.announcements.push(element)
      })
    },
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

export const { addFavorite, removeFavorite, addAllAnnouncements } = favoriteSlice.actions;
export default favoriteSlice.reducer;
