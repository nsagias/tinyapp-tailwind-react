export type Token = {
  id?: number,
  authToken?: string,
  refreshToken?: string | null,
  refreshedTokenAt?: Date | null,
  tokenIp?: string | null,
  userId?: number,
  deletedAt?: Date | null,
  createdAt?: Date,
  updatedAt?: Date,
};
