import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "light-theme",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      console.log("theme", state);
      state.theme =
        state.theme === "light-theme" ? "dark-theme" : "light-theme";
    },
  },
});

// // Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
