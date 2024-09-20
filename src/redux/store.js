import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/sliceCart";

const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

export default store;
