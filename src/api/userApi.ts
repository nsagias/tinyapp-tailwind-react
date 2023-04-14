import axios, { AxiosInstance } from "axios";

const userApi: AxiosInstance = axios.create({
  baseURL: `${process.env.USER_URL}:${process.env.USER_URL_PORT}`
});


// const firstName = await req.body && req.body.firstName || null;
//     const lastName = await req.body && req.body.lastName || null;
//     const email = await req.body && req.body.email || null;
//     const password = await req.body && req.body.password || null;
  
export const registerUser = async (userData: any) => {
  return await userApi.post("/register", userData)
};

// const email = await req.body && req.body.email || null;
// const password = await req.body && req.body.password || null;

export const loginUser = async (userData: any) => {
  return await userApi.post("/login", userData)
};

// const token = await req.body && req.body.token || null;
export const logoutUser = async (userData: any) => {
  return await userApi.post("/logout", userData)
};

