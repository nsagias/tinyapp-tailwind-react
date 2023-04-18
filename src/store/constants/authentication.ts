type IAuthentication = {
  isAuthenticated: boolean
} 

export const INITIAL_STATE_AUTHENTICATION: IAuthentication = { isAuthenticated: false };
export const AUTHENTICATION: string = "AUTHENTICATION";
