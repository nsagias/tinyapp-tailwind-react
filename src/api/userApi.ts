import axios, { AxiosInstance } from "axios";
import {
  LoginUser,
  LoginUserSuccessResponse,
  LogoutResponse,
  RegisterUser,
  RegisterUserSuccessResponse,
} from "../types/api/userApi";


// const userApi: AxiosInstance = axios.create();
const userApi: AxiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:3001/'
});



export const registerUser = async (data: RegisterUser): Promise<RegisterUserSuccessResponse> => {
  const response = await userApi.post<RegisterUserSuccessResponse>("/register", data);
  return response.data;
};


export const loginUser = async (data: LoginUser)=> {
  const response = await userApi.post<LoginUserSuccessResponse>("/login", data);
  return response.data;
};


export const logoutUser = async (headers: any): Promise<LogoutResponse> => {
  const response = await userApi.post<LogoutResponse>("/logout", { headers });
  return response.data;
};

