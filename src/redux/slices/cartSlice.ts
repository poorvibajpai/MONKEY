import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type initialStateType = {
 cartItems: CartItemType[];
};

const initialState: initialStateType = {
 cartItems: JSON.parse(
  localStorage.getItem("cartItem") || "[]"
 ) as CartItemType[],
};

const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addItemToCart: (state, action) => {

   if (state.cartItems.length == 0) {
    state.cartItems.push(action.payload);
    localStorage.setItem("cartItem", JSON.stringify([action.payload]));
   } else {
    const index = state.cartItems.findIndex((item) => item?._id == action.payload._id);

    if (index == -1) {
     state.cartItems.push(action.payload);
    } else {
     state.cartItems[index].quantity! = action.payload.quantity;
    }
    localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
   }
   
   return state;
  },

  removeItemFromCart:(state,action)=>{
    const id = action.payload
    state.cartItems = state.cartItems.filter(item => item._id != id)
    localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    toast.success("Item removed from cart");
  }
 },
});

export default cartSlice.reducer;
export const { addItemToCart , removeItemFromCart} = cartSlice.actions;
