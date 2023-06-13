import { graphql } from "@/generated/gql";

export const getTodosQuery = graphql(/* GraphQL */ `
  query Todos {
    getTodos {
      todos {
        id
        title
        isCompleted
        createdAt
        updatedAt
      }
    }
  }
`);
