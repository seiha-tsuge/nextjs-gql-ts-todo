import { gql, useQuery } from "urql";

const getTodosQuery = gql`
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
`;

export const useTodosQuery = () => {
  return useQuery({ query: getTodosQuery });
};
