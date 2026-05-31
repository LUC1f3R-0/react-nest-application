import axios from "axios";
import { GRAPHQL_API_URL } from "./apiConfig";

const graphqlClient = axios.create({
  baseURL: GRAPHQL_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default graphqlClient;
