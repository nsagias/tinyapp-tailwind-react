import axios, { AxiosInstance } from "axios";
import {
  LoginUser,
  LoginUserSuccessResponse,
  Logout,
  LogoutResponse,
  RegisterUser,
  RegisterUserSuccessResponse,
  UserErrorResponse
} from "../types/api/userApi";


const userApi: AxiosInstance = axios.create({
  baseURL: `${process.env.USER_URL}:${process.env.USER_URL_PORT}`
});


export const registerUser = async (params: RegisterUser): Promise<RegisterUserSuccessResponse| UserErrorResponse> => {
  const response = await userApi.post("/register", params);
  return response.data;
};


export const loginUser = async (params: LoginUser): Promise<LoginUserSuccessResponse | UserErrorResponse> => {
  const response = await userApi.post("/login", params);
  return response.data;
};


export const logoutUser = async (params: Logout): Promise<LogoutResponse | UserErrorResponse> => {
  const response = await userApi.post("/logout", params);
  return response.data;
};

