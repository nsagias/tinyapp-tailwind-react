import axios, { AxiosInstance } from "axios";
import {
  LoginUser,
  LoginUserSuccessResponse,
  LogoutResponse,
  RegisterUser,
  RegisterUserSuccessResponse,
  UserErrorResponse
} from "../types/api/userApi";


const userApi: AxiosInstance = axios.create();


export const registerUser = async (data: RegisterUser): Promise<RegisterUserSuccessResponse| UserErrorResponse> => {
  const response = await userApi.post("/register", data);
  return response.data;
};


export const loginUser = async (data: LoginUser): Promise<LoginUserSuccessResponse | UserErrorResponse> => {
  const response = await userApi.post("/login", data);
  return response.data;
};


export const logoutUser = async (headers: any): Promise<LogoutResponse | UserErrorResponse> => {
  const response = await userApi.post("/logout", { headers });
  return response.data;
};

