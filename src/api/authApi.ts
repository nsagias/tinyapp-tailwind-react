import axios, { AxiosInstance } from "axios";

const authApi: AxiosInstance = axios.create({
  baseURL: `${process.env.AUTH_URL}:${process.env.AUTH_URL_PORT}`
});