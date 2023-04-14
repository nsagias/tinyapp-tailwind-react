import axios, { AxiosInstance } from "axios";
import { LoginUser, LoginUserErrorResponse, LoginUserSuccessResponse, Logout, LogoutResponse, RegisterUser, UserInfo } from "../types/api/userApi";
import { Token } from "aws-sdk/clients/cloudwatchlogs";

const userApi: AxiosInstance = axios.create({
  baseURL: `${process.env.USER_URL}:${process.env.USER_URL_PORT}`
});


export const registerUser = async (userData: RegisterUser) => {
  const response = await userApi.post("/register", userData);
  return response.data;
};


export const loginUser = async (userData: LoginUser): Promise<LoginUserSuccessResponse | LoginUserErrorResponse> => {
  const response = await userApi.post("/login", userData);
  return response.data;
};


export const logoutUser = async (userData: Logout): Promise<LogoutResponse> => {
  const response = await userApi.post("/logout", userData);
  return response.data;
};

