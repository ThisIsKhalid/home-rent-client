
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const registerModalSlice = createSlice({
  name: "registerModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = registerModalSlice.actions;

export default registerModalSlice.reducer;
