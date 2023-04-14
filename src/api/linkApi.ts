import axios, { AxiosInstance } from "axios";

const linkApi: AxiosInstance = axios.create({
  baseURL: `${process.env.LINK_URL}:${process.env.LINK_URL_PORT}`
});