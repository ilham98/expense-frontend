import { createSlice } from "@reduxjs/toolkit";
import actions from "../actions/authActions";

const initialState = {
  username: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: actions,
});

export const { authAct } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
