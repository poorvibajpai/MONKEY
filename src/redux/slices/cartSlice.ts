import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
 cartItems: Array<any>;
};

const initialState: initialStateType = {
 cartItems: [],
};

const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addItemInCart: (state, action) => {
    const index = state.cartItems.findIndex((item)=> item.id == action.payload.id)
    if (index != -1) {
      state.cartItems[Number(index)].quantity += 1;
   } else {
    state.cartItems?.push(action.payload);
   }
  },
 },
});

export default cartSlice.reducer;
export const { addItemInCart } = cartSlice.actions;
