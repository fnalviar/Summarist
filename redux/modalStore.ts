import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";

export const modalStore = configureStore({
  reducer: {
    modal: modalSlice
  },
});

export type RootState = ReturnType<typeof modalStore.getState>
export type AppDispatch = typeof modalStore.dispatch