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

