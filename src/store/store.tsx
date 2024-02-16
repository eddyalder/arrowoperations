import { configureStore } from "@reduxjs/toolkit";
import stratsReducer from './slice';

const store = configureStore({ reducer: { strats: stratsReducer } });

export default store;