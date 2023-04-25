import axios, { AxiosInstance } from "axios";
import { 
  DeleteShortLink,
  DeleteShortLinkResponse,
  GetLongURL,
  LinksListSuccessReponse,
  LinkSuccessReponse,
  NewShortLink,
  UpdateShortLink,
  UpdateShortLinkResponse,
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


export const updateShortLinkByUserId = async (data: UpdateShortLink, token: string): Promise<UpdateShortLinkResponse> => {
  const response = await linkApi.post<UpdateShortLinkResponse>(`/urls/update`, { data, headers: {
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


export const getLinkByUserIdAndShortLink = async (req: any, token: string): Promise<any> => {
  const response = await linkApi.get<any>(`/urls/users/${req.userId}/shortUrl/${req.shortUrl}`, { headers: {
    "Authorization": token
  }});
  return response.data;
};