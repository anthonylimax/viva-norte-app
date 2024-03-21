// src/slices/favoriteSlice.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoggedState {
  logged: boolean;
}
const initialState: LoggedState = {
  logged: false,
};

const LoggedSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLogged: (state, action) => {
      state.logged = action.payload;
    },
  },
});

export const { setLogged } = LoggedSlice.actions;
export default LoggedSlice.reducer;
