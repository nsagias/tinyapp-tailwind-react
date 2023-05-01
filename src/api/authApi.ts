import axios, { AxiosInstance } from "axios";

const authApi: AxiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:3001/'
});