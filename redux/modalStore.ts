import { configureStore } from "@reduxjs/toolkit";
import audioPlayerSlice from "./audioPlayerSlice";
import modalSlice from "./modalSlice";
import sideBarSlice from "./sideBarSlice";

export const modalStore = configureStore({
  reducer: {
    modal: modalSlice,
    audioPlayer: audioPlayerSlice,
    sideBar: sideBarSlice,
  },
});

export type RootState = ReturnType<typeof modalStore.getState>;
export type AppDispatch = typeof modalStore.dispatch;
