import axios from "axios";
import baseURL from "../utils/baseUrl";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
