import { UserInfo } from "../../types/api/userApi";

export const INITIAL_STATE_USER: UserInfo = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  emailVerified: null,
  active: false,
};

export const USER_INFO: string = "USER_INFO";
