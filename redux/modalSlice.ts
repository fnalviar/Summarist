import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  value: boolean;
}

const initialState: ModalState = {
  value: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalOpen: (state) => {
            state.value = true
        },
        modalClose: (state) => {
            state.value = false
        }
    }
});

export const { modalOpen, modalClose } = modalSlice.actions

export default modalSlice.reducer