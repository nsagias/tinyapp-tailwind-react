import axios, { AxiosInstance } from "axios";
// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname+'/.env' });
import {
  LoginUser,
  LoginUserSuccessResponse,
  LogoutResponse,
  RegisterUser,
  RegisterUserSuccessResponse,
  UserErrorResponse
} from "../types/api/userApi";


const userApi: AxiosInstance = axios.create();


export const registerUser = async (params: RegisterUser): Promise<RegisterUserSuccessResponse| UserErrorResponse> => {
  const response = await userApi.post("/register", params);
  return response.data;
};


export const loginUser = async (params: LoginUser): Promise<LoginUserSuccessResponse | UserErrorResponse> => {
  const response = await userApi.post("/login", params);
  return response.data;
};


export const logoutUser = async (header: any): Promise<LogoutResponse | UserErrorResponse> => {
  const response = await userApi.post("/logout");
  return response.data;
};

