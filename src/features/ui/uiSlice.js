import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: {
    isOpen: false,
  },
};

export const userSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    open: (state) => {
      state.menu.isOpen = true;
    },
    close: (state) => {
      state.menu.isOpen = false;
    },
    toggle: (state) => {
      state.menu.isOpen = !state.menu.isOpen;
    },
  },
});

export const { open, close, toggle } = userSlice.actions;

export const selectMenuState = (state) => state.ui.menu.isOpen;

export default userSlice.reducer;
