import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers";
import themeReducer from "./themeReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
export default store;
