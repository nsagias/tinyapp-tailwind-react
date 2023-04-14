import axios, { AxiosInstance } from "axios";

const linkApi: AxiosInstance = axios.create({
  baseURL: `${process.env.LINK_URL}:${process.env.LINK_URL_PORT}`
});

// get("/urls/users/:userId",
// const authToken = await req.body && req.body.token || null;
// const userId = req.params && req.params.userId || null; 
export const getLinksByUserId = async () => {

};

// post("/urls/new"
// const authToken = await req.body && req.body.token || null;
// const userId = await req.body && req.body.userId || null;
// const longUrl = await req.body && req.body.longUrl|| null
export const getCreateShortLink = async () => {
  
};

// post("/urls/update"
// const authToken = await req.body && req.body.token || null;
// const userId = await req.body && req.body.userId || null;
// const shortUrl = await req.body && req.body.shortUrl || null;
// const updatedUrlData = await req.body && req.body.updatedUrlData || null;
export const updateShortLinkByUserId = async () => {
  
};

// post("/urls/delete",
// const authToken = await req.body && req.body.token || null;
// const userId = await req.body && req.body.userId || null;
// const shortUrl = await req.body && req.body.shortUrl || null
export const deleteShorLinkByUserId = async () => {
  
};

// get("/urls/users/:userId/shortUrl/:shortUrl",
// const ip = req.socket && req.socket?.remoteAddress && req.socket?.remoteAddress.split("::ffff:")[1] || null;
// const authToken = await req.body && req.body.token || null;
// const userId = req.params && req.params.userId || null;
// const shortUrl = req.params && req.params.shortUrl || null;
export const getLinkByUserIdAndShortLink = async () => {
  
};