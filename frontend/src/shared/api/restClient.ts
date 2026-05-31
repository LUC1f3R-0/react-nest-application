import axios from "axios";
import { REST_API_BASE_URL } from "./apiConfig";

const restClient = axios.create({
  baseURL: REST_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

restClient.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};

  config.headers["X-Request-Id"] = crypto.randomUUID();

  const method = config.method?.toLowerCase();

  if (["post", "put", "patch", "delete"].includes(method ?? "")) {
    config.headers["Idempotency-Key"] = crypto.randomUUID();
  }

  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
    delete config.headers["content-type"];
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

export default restClient;
