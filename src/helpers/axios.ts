import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
});
export const axiosInstanceUser = axios.create({
  baseURL: "https://api.github.com/users",
});
