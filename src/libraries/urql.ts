import { Client, cacheExchange, fetchExchange } from "urql";

export const urqlClient = new Client({
  url: "http://localhost:5555/graphql",
  exchanges: [cacheExchange, fetchExchange],
});
