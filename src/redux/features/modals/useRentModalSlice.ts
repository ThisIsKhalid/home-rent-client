import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const rentModalSlice = createSlice({
  name: "rentModal",
  initialState,
  reducers: {
    openRentModal: (state) => {
      state.isOpen = true;
    },
    closeRentModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openRentModal, closeRentModal } = rentModalSlice.actions;

export default rentModalSlice.reducer;
