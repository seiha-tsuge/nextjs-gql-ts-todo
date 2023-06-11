import { gql, useQuery, useMutation } from "@apollo/client";

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

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
  return useQuery(getTodosQuery);
};

export type MakeTodoInput = {
  title: Scalars["String"];
};

export const MakeTodoDocument = gql`
  mutation MakeTodo($makeTodoInput: MakeTodoInput!) {
    makeTodo(makeTodoInput: $makeTodoInput) {
      todo {
        id
        title
        isCompleted
        createdAt
        updatedAt
      }
    }
  }
`;

export const useMakeTodoMutation = () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(MakeTodoDocument);

  const makeTodo = (title: string) => {
    const makeTodo = mutateFunction({
      variables: {
        makeTodoInput: {
          title,
        },
      },
      refetchQueries: [getTodosQuery],
    });

    return makeTodo;
  };

  return { makeTodo, data, loading, error };
};

export type RemoveTodoInput = {
  todoId: Scalars["String"];
};

export const RemoveTodoDocument = gql`
  mutation RemoveTodo($removeTodoInput: RemoveTodoInput!) {
    removeTodo(removeTodoInput: $removeTodoInput) {
      todo {
        id
        title
      }
    }
  }
`;

export const useRemoveTodoMutation = () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(RemoveTodoDocument);

  const removeTodo = (id: string) => {
    const removeTodo = mutateFunction({
      variables: {
        removeTodoInput: {
          todoId: id,
        },
      },
      refetchQueries: [getTodosQuery],
    });

    return removeTodo;
  };

  return { removeTodo, data, loading, error };
};
