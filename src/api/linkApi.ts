import axios, { AxiosInstance } from "axios";
import { 
  DeleteShortLink,
  DeleteShortLinkResponse,
  GetLinksByUserId,
  GetLongURL,
  LinkErrorMessage,
  LinksListSuccessReponse,
  LinkSuccessReponse,
  NewShortLink,
  UpdateShortLink
} from "../types/api/linkApi";

const linkApi: AxiosInstance = axios.create({
  baseURL: `${process.env.LINK_URL}:${process.env.LINK_URL_PORT}`
});


export const getLinksByUserId = async (params: GetLinksByUserId): Promise<LinksListSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.get(`/urls/users/${params.userId}`, {data: params});
  return response.data;
};


export const getCreateShortLink = async (params: NewShortLink): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.post(`/urls/new`, {data: params});
  return response.data;
};


export const updateShortLinkByUserId = async (params: UpdateShortLink): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.patch(`/urls/delete`, {data: params});
  return response.data;
};


export const deleteShorLinkByUserId = async (params: DeleteShortLink): Promise<DeleteShortLinkResponse | LinkErrorMessage> => {
  const response = await linkApi.delete("/urls/delete", {data: params});
  return response.data;
};


export const getLinkByUserIdAndShortLink = async (params: GetLongURL): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.get(`/urls/users/${params.userId}/shortUrl/${params.shortUrl}`, {data: params});
  return response.data;
};