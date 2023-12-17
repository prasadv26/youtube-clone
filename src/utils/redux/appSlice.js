import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideSidebar: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSidebar, hideSidebar } = appSlice.actions;
export default appSlice.reducer;
