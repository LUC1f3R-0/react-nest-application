const rawBaseUrl =
  import.meta.env.VITE_API_BASE_URL ??
  import.meta.env.VITE_BASEURL ??
  "http://localhost:3000";

export const API_BASE_URL = String(rawBaseUrl).replace(/\/$/, "");

export const REST_API_BASE_URL = `${API_BASE_URL}/api/v1`;

export const GRAPHQL_API_URL = `${API_BASE_URL}/api/v1/graphql`;