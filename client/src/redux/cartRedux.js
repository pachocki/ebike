import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    reset:0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    
    },
    addReset: (state) => {
      state.quantity = 0;
     
    },
  },
});

export const { addProduct , addReset } = cartSlice.actions;
export default cartSlice.reducer;