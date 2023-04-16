export type UrlModel = {
  id?: number,
  longUrl?: string,
  shortUrl?: string,
  count?: number,
  userId?: number;
  deletedAt?: Date | null,
  createdAt?: Date,
  updatedAt?: Date,
};

export type LinkSuccessReponse = {
  message: string,  
  data: UrlModel,
}

export type LinkErrorMessage = {
  message: string
}

export type GetLinksByUserId = {
  userId: number,
}

export type LinksListSuccessReponse = {
  message: string,  
  data: UrlModel[],
}

export type NewShortLink = {
  userId: number,
  longUrl: string
}

export type UpdateShortLink = {
  userId: number,
  shortUrl: string,
  updatedUrlData: UrlModel
}


export type DeleteShortLink = {
  userId: number,
  shortUrl: string,
}

export type DeleteShortLinkResponse = {
  message: boolean
}

export type  GetLongURL = {
  userId: number,
  shortUrl: string,
}