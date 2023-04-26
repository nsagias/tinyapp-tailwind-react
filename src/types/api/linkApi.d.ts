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
  data?: UrlModel,
}

export type UpdateShortLink = {
  userId: number,
  shortUrl: string,
  longUrl: string
}

export type UpdateShortLinkResponse = {
  message: string,
  data: UpdateShortLink,
}

export type CreateShortLink = {
  userId: number,
  longUrl: string
}

export type CreateShortLinkResponse = {
  message: string,
  data: NewShortLink,
}

export type LinkErrorMessage = {
  message: string
}

export type UserId = {
  userId: any,
}

export type LinksListSuccessReponse = {
  message: string,  
  data: UrlModel[],
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

export type RequestSelectedShortLink = { 
  userId: number,
  shortUrl: any,
}