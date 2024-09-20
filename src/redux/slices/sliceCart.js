import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.data.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
