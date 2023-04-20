import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATION, INITIAL_STATE_AUTHENTICATION } from "../constants/authentication";
import { IAuthentication } from "../../types/store/authentication"

const authenticationSlice = createSlice({
  name: AUTHENTICATION,
  initialState: INITIAL_STATE_AUTHENTICATION,
  reducers: {
    setAuthTrue(state: IAuthentication): void {
      state.isAuthenticated = true;
    },
    setAuthFalse(state: IAuthentication): void {
      state.isAuthenticated = false;
    }
  }
});

export const { setAuthTrue, setAuthFalse } = authenticationSlice.actions;
export default authenticationSlice.reducer;