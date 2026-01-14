import axios from "axios";
import baseURL from "../utils/baseUrl";

const api = axios.create({
  baseURL, // uses the variable from baseUrl.js
});

// Add JWT token to every request if it exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
