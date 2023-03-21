import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./slices/DisplaySlice";
import soundsSlice from "./slices/SoundsSlice";
import volumeSlice from "./slices/VolumeSlice";

const store = configureStore({
  reducer: {
    display: displaySlice,
    sounds: soundsSlice,
    volume: volumeSlice,
  },
});

export default store;
