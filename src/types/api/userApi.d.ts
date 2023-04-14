export type RegisterUser = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export type LoginUser = {
  email: string,
  password: string,
}

export type Logout = {
  authToken: string;
}