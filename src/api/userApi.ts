import axios, { AxiosInstance } from "axios";
import { LoginUser, LoginUserSuccessResponse, Logout, LogoutResponse, RegisterUser, RegisterUserSuccessResponse, UserErrorResponse, UserInfo } from "../types/api/userApi";


const userApi: AxiosInstance = axios.create({
  baseURL: `${process.env.USER_URL}:${process.env.USER_URL_PORT}`
});


export const registerUser = async (userData: RegisterUser): Promise< RegisterUserSuccessResponse| UserErrorResponse> => {
  const response = await userApi.post("/register", userData);
  return response.data;
};


export const loginUser = async (userData: LoginUser): Promise<LoginUserSuccessResponse | UserErrorResponse> => {
  const response = await userApi.post("/login", userData);
  return response.data;
};


export const logoutUser = async (userData: Logout): Promise<LogoutResponse | UserErrorResponse> => {
  const response = await userApi.post("/logout", userData);
  return response.data;
};

