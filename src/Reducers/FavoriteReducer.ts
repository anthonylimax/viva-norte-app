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
  announcements: [
    {
      city: "Recife",
      image: [require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"),],
      streetName: "Rua do imperador",
      number: 30,
      neighborHood: "Tejipio",
      condominiumName: "Prince Antonio Maia",
      id: "sadasd",
      price: 150000
    },
    {
      city: "Recife",
      image: [require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"),],
      streetName: "Rua do imperador",
      number: 30,
      neighborHood: "Tejipio",
      condominiumName: "Prince Antonio Maia",
      id: "432",
      price: 150000
    },
    {
      city: "Recife",
      image: [require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"),],
      streetName: "Rua do imperador",
      number: 30,
      neighborHood: "Tejipio",
      condominiumName: "Prince Antonio Maia",
      id: "4321",
      price: 150000
    },
    {
      city: "Recife",
      image: [require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"), require("./../../assets/example.png"),],
      streetName: "Rua do imperador",
      number: 30,
      neighborHood: "Tejipio",
      condominiumName: "Prince Antonio Maia",
      id: "123",
      price: 150000
    }
  ],
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
