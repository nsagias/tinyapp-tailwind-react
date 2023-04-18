import { createSlice } from "@reduxjs/toolkit";
import { 
  AUTHENTICATION, 
  INITIAL_STATE_AUTHENTICATION, 
  IAuthentication 
} from "../constants/authentication";

const authenticationSlice = createSlice({
  name: AUTHENTICATION,
  initialState: INITIAL_STATE_AUTHENTICATION,
  reducers: {
    login(state: IAuthentication): void {
      state.isAuthenticated = true;
    },
    logout(state: IAuthentication): void {
      state.isAuthenticated = false;
    }
  }
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice.reducer;