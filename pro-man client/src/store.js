import { configureStore } from "@reduxjs/toolkit"
import reduxReducer from "./global-state/reducers/reduxReducer";
const store = configureStore({ reducer: reduxReducer });

export default store;