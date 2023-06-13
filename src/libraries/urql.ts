import { Client, cacheExchange, fetchExchange } from "urql";
import { API_GRAPHQL_URL } from "@/config";

export const urqlClient = new Client({
  url: API_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
});
