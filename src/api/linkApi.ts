import { Token } from "aws-sdk/clients/cloudwatchlogs";
import axios, { AxiosInstance } from "axios";
import { UrlModel, LinkErrorMessage } from "../types/api/linkApi";

const linkApi: AxiosInstance = axios.create({
  baseURL: `${process.env.LINK_URL}:${process.env.LINK_URL_PORT}`
});


export type GetLinksByUserId = {
  token: Token,
  userId: number,
}

export type LinksByUserIdSuccessReponse = {
  message: string,  
  data: UrlModel[],
}

export const getLinksByUserId = async (params: GetLinksByUserId): Promise<LinksByUserIdSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.get(`/urls/users/${params.userId}`, {data: params});
  return response.data;
};


export type NewShortLink = {
  token: Token,
  userId: number,
  longUrl: string
}

export type NewShortLinkSuccessReponse = {
  message: string,  
  data: UrlModel,
}
export const getCreateShortLink = async (params: NewShortLink ) => {
  const response = await linkApi.post(`/urls/new`, {data: params}) ;
  return response.data;
};

export type UpdateShortLink = {
  token: Token,
  userId: number,
  shortUrl: string,
  updatedUrlData: UrlModel
}
export const updateShortLinkByUserId = async (params: UpdateShortLink) => {
  const response = await linkApi.patch(`/urls/delete`, {data: params}) ;
  return response.data;
};


export type DeleteShortLink = {
  token: Token,
  userId: number,
  shortUrl: string,
}
export const deleteShorLinkByUserId = async (params: DeleteShortLink) => {
  const response = await linkApi.delete("/urls/delete", {data: params});
  return response.data;
};

export type  GetLongURL = {
  token: Token,
  userId: number,
  shortUrl: string,
}
export const getLinkByUserIdAndShortLink = async (params: GetLongURL) => {
  const response = await linkApi.get(`/urls/users/${params.userId}/shortUrl/${params.shortUrl}`, {data: params});
  return response.data;
};