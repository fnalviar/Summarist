import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import audioPlayerSlice from "./audioPlayerSlice";

export const modalStore = configureStore({
  reducer: {
    modal: modalSlice,
    audioPlayer: audioPlayerSlice,
  },
});

export type RootState = ReturnType<typeof modalStore.getState>;
export type AppDispatch = typeof modalStore.dispatch;
