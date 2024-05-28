import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type initialStateType = {
 user: UserInfo;
};

const initialState: initialStateType = {
 user: JSON.parse(localStorage.getItem("userInfo") || "{}"),
};

const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
  setUser(state, action) {
   state.user = action.payload;
   return state
  },
 },
});

export default userSlice.reducer;
export const {setUser} = userSlice.actions;
