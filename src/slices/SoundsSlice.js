import { createSlice } from "@reduxjs/toolkit";
import sounds from "../Sounds";

const initialState = {
  sounds: sounds,
};

export const soundsSlice = createSlice({
  name: "sounds",
  initialState,
  reducers: {
    setSounds: (state, action) => {
      state.sounds = action.payload;
    },
  },
});

export const { setSounds } = soundsSlice.actions;

export default soundsSlice.reducer;
