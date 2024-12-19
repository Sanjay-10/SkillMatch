import { configureStore } from "@reduxjs/toolkit";
import skillMatchReducer from "./skillMatchSlice";

const store = configureStore({
  reducer: {
    skillMatch: skillMatchReducer,
  },
});

export default store;
