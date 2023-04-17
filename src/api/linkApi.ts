import axios, { AxiosInstance } from "axios";
import { 
  DeleteShortLink,
  DeleteShortLinkResponse,
  GetLongURL,
  LinkErrorMessage,
  LinksListSuccessReponse,
  LinkSuccessReponse,
  NewShortLink,
  UpdateShortLink,
  UserId
} from "../types/api/linkApi";


const linkApi: AxiosInstance = axios.create();


export const getLinksByUserId = async (id: UserId, headers: any): Promise<LinksListSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.get(`/urls/users/${id}`, { headers } );
  return response.data;
};


export const getCreateShortLink = async (req: NewShortLink, headers: any): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.post(`/urls/new`, { req, headers}) ;
  return response.data;
};


export const updateShortLinkByUserId = async (req: UpdateShortLink, headers: any): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.patch(`/urls/delete`, { req, headers }) ;
  return response.data;
};


export const deleteShorLinkByUserId = async (req: DeleteShortLink, headers: any): Promise<DeleteShortLinkResponse | LinkErrorMessage> => {
  const response = await linkApi.delete("/urls/delete", {data: req, headers});
  return response.data;
};


export const getLinkByUserIdAndShortLink = async (req: GetLongURL, headers: any): Promise<LinkSuccessReponse | LinkErrorMessage> => {
  const response = await linkApi.get(`/urls/users/${req.userId}/shortUrl/${req.shortUrl}`, { headers });
  return response.data;
};