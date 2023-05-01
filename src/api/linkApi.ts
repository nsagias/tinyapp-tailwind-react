import axios, { AxiosInstance } from "axios";
import { 
  CreateShortLink,
  CreateShortLinkResponse,
  DeleteShortLink,
  DeleteShortLinkResponse,
  GetLongURL,
  LinksListSuccessReponse,
  UpdateShortLink,
  UpdateShortLinkResponse,
  UserId
} from "../types/api/linkApi";


const linkApi: AxiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:3001/'
});


export const getLinksByUserId = async (id: any, token: string): Promise<LinksListSuccessReponse> => {
  const response = await linkApi.get<LinksListSuccessReponse>(`/urls/users/${id}`, { headers: {
    "Authorization": token
  }});
  return response.data;
};


export const createShortLink = async (data: CreateShortLink, token: string): Promise<CreateShortLinkResponse> => {
  const response = await linkApi.post<CreateShortLinkResponse>(`/urls/new`, { data, token });
  return response.data;
};


export const updateShortLinkByUserId = async (data: UpdateShortLink, token: string): Promise<UpdateShortLinkResponse> => {
  const response = await linkApi.post<UpdateShortLinkResponse>(`/urls/update`, { data, token });
  return response.data;
};


export const deleteShorLinkByUserId = async (data: DeleteShortLink, token: string): Promise<DeleteShortLinkResponse> => {
  const response = await linkApi.post<DeleteShortLinkResponse>("/urls/delete", { data, token });
  return response.data;
};


export const getLinkByUserIdAndShortLink = async (req: any, token: string): Promise<any> => {
  const response = await linkApi.get<any>(`/urls/users/${req.userId}/shortUrl/${req.shortUrl}`, { headers: {
    "Authorization": token
  }});
  return response.data;
};