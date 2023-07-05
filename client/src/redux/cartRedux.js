import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    reset: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );
      if (productIndex !== -1) {
        const removedProduct = state.products.splice(productIndex, 1)[0];
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.price * removedProduct.quantity;
      }
    },
    addReset: (state) => {
      state.quantity = 0;
    },
  },
});

export const { addProduct , addReset,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;