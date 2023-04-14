import { Token } from "aws-sdk/clients/cloudwatchlogs";
import axios, { AxiosInstance } from "axios";
import { UrlModel } from "../types/api/linkApi";

const linkApi: AxiosInstance = axios.create({
  baseURL: `${process.env.LINK_URL}:${process.env.LINK_URL_PORT}`
});


export type GetLinksByUserId = {
  token: Token,
  userId: number,
}
export const getLinksByUserId = async (request: GetLinksByUserId) => {
  const response = await linkApi.get(`/urls/users/${request.userId}`, request.token);
  return response.data;
};


export type NewShortLink = {
  token: Token,
  userId: number,
  longUrl: string
}
export const getCreateShortLink = async (createData: NewShortLink ) => {
  const response = await linkApi.post(`/urls/new`, createData) ;
  return response.data;
};

export type UpdateShortLink = {
  token: Token,
  userId: number,
  shortUrl: string,
  updatedUrlData: UrlModel
}
export const updateShortLinkByUserId = async (updateData: any) => {
  const response = await linkApi.patch(`/urls/delete`, updateData) ;
  return response.data;
};


export type DeleteShortLink = {
  token: Token,
  userId: number,
  shortUrl: string,
}
export const deleteShorLinkByUserId = async (deleteLink: any) => {
  const response = await linkApi.delete(`/urls/delete`, deleteLink);
  return response.data;
};

export type  GetLongURL = {
  token: Token,
  userId: number,
  shortUrl: string,
}
export const getLinkByUserIdAndShortLink = async (request: any) => {
  const response = await linkApi.get(`/urls/users/${request.userId}/shortUrl/${request.shortUrl}`, request.token);
  return response.data;
};