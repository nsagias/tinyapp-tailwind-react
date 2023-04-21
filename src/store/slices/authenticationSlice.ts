import { createSlice } from "@reduxjs/toolkit";
import { AUTHENTICATION, isAuthenticated } from "../constants/authentication";
import { IAuthentication } from "../../types/store/authentication";
import localStorageService from "../../services/localStorageService";

// Get current is authenticated state from local storage
const localStorageIsAuthenticated = localStorageService.getLocalStorageItem(isAuthenticated);

// Set initial state based on current authentication.
export const initialAuthenticationState: IAuthentication = { 
  isAuthenticated: localStorageIsAuthenticated ? true : false
};

const authenticationSlice = createSlice({
  name: AUTHENTICATION,
  initialState: initialAuthenticationState,
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