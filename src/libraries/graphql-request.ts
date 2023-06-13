import { GraphQLClient } from "graphql-request";
import { API_GRAPHQL_URL } from "@/config";

export const graphQLClient = new GraphQLClient(API_GRAPHQL_URL);
