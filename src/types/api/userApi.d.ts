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

export type UserErrorResponse = {
  message: string
}

// Registration Section
export type RegisterUser = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export type RegisterUserSuccessResponse = {
  userInfo: UserInfo;
}

// Login User Section
export type LoginUser = {
  password: string,
}

export type LoginUserSuccessResponse = {
  userInfo: UserInfo;
}



export type LogoutResponse = {
  message: string
}

