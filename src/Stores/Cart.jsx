import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect"; // Import reselect

const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, price, title, image } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      const itemPrice = price !== undefined ? price : 0;
      
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity; 
      } else {
      
        state.items.push({ productId, quantity, price: itemPrice, title, image });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  toggleStatusTab,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;


export const selectCartItems = createSelector(
  (state) => state.cart.items,
  (items) => items
);


export const selectTotalPrice = createSelector([selectCartItems], (items) => {

  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
});


export const selectCartItemCount = createSelector(
  [selectCartItems],
  (items) => {
    return items.length;
  }
);
