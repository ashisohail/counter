// import { configureStore } from "@redusjs/toolkit";
import * as toolkitRaw from "@reduxjs/toolkit";
const { configureStore } = toolkitRaw.default ?? toolkitRaw;
import counterReducer from "./reducers";

const store = configureStore(counterReducer);
export default store;
