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


const linkApi: AxiosInstance = axios.create();


export const getLinksByUserId = async (id: any, headers: any): Promise<LinksListSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.get(`/urls/users/${id}`);
  return response.data;
};


export const getCreateShortLink = async (params: NewShortLink, headers: any): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.post(`/urls/new`, {data: params}) ;
  return response.data;
};


export const updateShortLinkByUserId = async (params: UpdateShortLink, headers: any): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.patch(`/urls/delete`, {data: params}) ;
  return response.data;
};


export const deleteShorLinkByUserId = async (params: DeleteShortLink, headers: any): Promise<DeleteShortLinkResponse | LinkErrorMessage> => {
  const response = await linkApi.delete("/urls/delete", {data: params});
  return response.data;
};


export const getLinkByUserIdAndShortLink = async (params: GetLongURL, headers: any): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.get(`/urls/users/${params.userId}/shortUrl/${params.shortUrl}`, {data: params});
  return response.data;
};