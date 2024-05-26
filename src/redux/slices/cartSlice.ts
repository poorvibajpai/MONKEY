import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
 cartItems: CartItemType[];
};

const initialState: initialStateType = {
 cartItems: JSON.parse(localStorage.getItem("cartItem") || "[]") as CartItemType[],
};

const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {

    updateCart:(state)=>{
      state.cartItems = JSON.parse(localStorage.getItem("cartItem") || "[]") as CartItemType[]
    }
 },
});

export default cartSlice.reducer;
export const { updateCart } = cartSlice.actions;
