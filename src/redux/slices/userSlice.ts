import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
 user: UserInfo | {};
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

  removeUser:(state)=>{
    state.user = {}
    localStorage.removeItem("userInfo")
  }
 },
});

export default userSlice.reducer;
export const {setUser,removeUser} = userSlice.actions;
