import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeText: "",
  fileName: "",
  result: "", 
  isDarkMode: false,
  loading: false,
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
    setLoading: (state, action) => {
      state.loading = action.payload; 
    },
  },
});

export const { setResumeText, setFileName, setResult, toggleDarkMode, setLoading } = skillMatchSlice.actions;

export default skillMatchSlice.reducer;
