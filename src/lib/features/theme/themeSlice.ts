import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  value: string;
}

const initialState = { value: "light" } as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLight(state) {
      state.value = "light";
    },
    setDark(state) {
      state.value = "dark";
    },
    setSystem(state) {
      state.value = "system";
    },
  },
});

export const { setDark, setLight, setSystem } = themeSlice.actions;
export default themeSlice.reducer;
