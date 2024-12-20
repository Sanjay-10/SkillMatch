import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeText: "",
  fileName: "",
  result: "", 
  isDarkMode: false,
};

const skillMatchSlice = createSlice({
  name: "skillMatch",
  initialState,

  reducers: {
    setResumeText(state, action) {
      state.resumeText = action.payload;
    },
    setFileName(state, action) {
      state.fileName = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { setResumeText, setFileName, setResult, toggleDarkMode } = skillMatchSlice.actions;

export default skillMatchSlice.reducer;
