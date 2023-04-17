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


export const getLinksByUserId = async (id: any): Promise<LinksListSuccessReponse> => {
  // const response = await linkApi.get(`/urls/users/${id}`, { headers } );
  const response = await linkApi.get<LinksListSuccessReponse>(`/urls/users/${id}` );
  return response.data;
};


export const getCreateShortLink = async (req: NewShortLink, headers: any): Promise<LinkSuccessReponse> => {
  const response = await linkApi.post<LinkSuccessReponse>(`/urls/new`, { req, headers}) ;
  return response.data;
};


export const updateShortLinkByUserId = async (req: UpdateShortLink, headers: any): Promise<LinkSuccessReponse> => {
  const response = await linkApi.patch<LinkSuccessReponse>(`/urls/delete`, { req, headers }) ;
  return response.data;
};


export const deleteShorLinkByUserId = async (req: DeleteShortLink, headers: any): Promise<DeleteShortLinkResponse> => {
  const response = await linkApi.delete<DeleteShortLinkResponse>("/urls/delete", {data: req, headers});
  return response.data;
};


export const getLinkByUserIdAndShortLink = async (req: GetLongURL, headers: any): Promise<LinkSuccessReponse> => {
  const response = await linkApi.get<LinkSuccessReponse>(`/urls/users/${req.userId}/shortUrl/${req.shortUrl}`, { headers });
  return response.data;
};