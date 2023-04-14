import axios, { AxiosInstance } from "axios";

const userApi: AxiosInstance = axios.create({
  baseURL: `${process.env.USER_URL}:${process.env.USER_URL_PORT}`
});

export const registerUser = async (userData: any) => {
  return await userApi.post("/register", userData)
};

export const loginUser = async (userData: any) => {
  return await userApi.post("/login", userData)
};

export const logoutUser = async (userData: any) => {
  return await userApi.post("/logout", userData)
};

