export type UserInfo = {
  id?: number,
  firstName?: string,
  lastName?: string,
  email?: string,
  emailVerified?: Date | null,
  password?: string,
  active?: boolean,
  deletedAt?: Date | null,
  createdAt?: Date,
  updatedAt?: Date,
}

export type RegisterUser = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

// Login User Section
export type LoginUser = {
  email: string,
  password: string,
}

export type LoginUserSuccessResponse = {
  token: Token;
  userInfo: UserInfo;
}
export type LoginUserErrorResponse = {
  message: string
}


// Logout User Section
export type Logout = {
  authToken: string;
}

export type LogoutResponse = {
  message: string
}

