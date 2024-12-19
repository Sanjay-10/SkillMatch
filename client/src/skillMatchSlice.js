import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeText: "",
  fileName: "",
  result: "",
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
  },
});

export const { setResumeText, setFileName, setResult } = skillMatchSlice.actions;

export default skillMatchSlice.reducer;
