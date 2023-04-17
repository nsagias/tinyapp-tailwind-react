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


export const getLinksByUserId = async (id: any, token: string): Promise<LinksListSuccessReponse> => {
  const response = await linkApi.get<LinksListSuccessReponse>(`/urls/users/${id}`, { headers: {
    "Authorization": token
  }});
  return response.data;
};


export const getCreateShortLink = async (req: NewShortLink, token: string): Promise<LinkSuccessReponse> => {
  const response = await linkApi.post<LinkSuccessReponse>(`/urls/new`, { req, headers: {
    "Authorization": token
  }});
  return response.data;
};


export const updateShortLinkByUserId = async (req: UpdateShortLink, token: string): Promise<LinkSuccessReponse> => {
  const response = await linkApi.patch<LinkSuccessReponse>(`/urls/delete`, { req, headers: {
    "Authorization": token
  }});
  return response.data;
};


export const deleteShorLinkByUserId = async (req: DeleteShortLink, token: string): Promise<DeleteShortLinkResponse> => {
  const response = await linkApi.delete<DeleteShortLinkResponse>("/urls/delete", {data: req, headers: {
    "Authorization": token
  }});
  return response.data;
};


export const getLinkByUserIdAndShortLink = async (req: GetLongURL, token: string): Promise<LinkSuccessReponse> => {
  const response = await linkApi.get<LinkSuccessReponse>(`/urls/users/${req.userId}/shortUrl/${req.shortUrl}`, { headers: {
    "Authorization": token
  }});
  return response.data;
};