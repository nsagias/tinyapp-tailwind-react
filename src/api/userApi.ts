import axios, { AxiosInstance } from "axios";

const userApi: AxiosInstance = axios.create({
  baseURL: `${process.env.USER_URL}:${process.env.USER_URL_PORT}`
});

export type RegisterUser = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}
export const registerUser = async (userData: RegisterUser) => {
  return await userApi.post("/register", userData)
};


export type LoginUser = {
  email: string,
  password: string,
}
export const loginUser = async (userData: LoginUser) => {
  return await userApi.post("/login", userData)
};


export type Logout = {
  authToken: string;
}
export const logoutUser = async (userData: Logout) => {
  return await userApi.post("/logout", userData)
};

