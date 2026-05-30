import axios from "axios";

const baseUrl = `${import.meta.env.VITE_BASEURL}/api/v1`;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
})
export default axiosInstance;  