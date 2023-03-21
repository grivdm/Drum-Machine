import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayValue: "",
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayValue: (state, action) => {
      state.displayValue = action.payload;
    },
  },
});

export const { setDisplayValue } = displaySlice.actions;

export default displaySlice.reducer;
