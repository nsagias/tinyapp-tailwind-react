import axios, { AxiosInstance } from "axios";
import { LoginUser, Logout, RegisterUser } from "../types/api/userApi";

const userApi: AxiosInstance = axios.create({
  baseURL: `${process.env.USER_URL}:${process.env.USER_URL_PORT}`
});


export const registerUser = async (userData: RegisterUser) => {
  return await userApi.post("/register", userData)
};


export const loginUser = async (userData: LoginUser) => {
  return await userApi.post("/login", userData)
};

export const logoutUser = async (userData: Logout) => {
  return await userApi.post("/logout", userData)
};

