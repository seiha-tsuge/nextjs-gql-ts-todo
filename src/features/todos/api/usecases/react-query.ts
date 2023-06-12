import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/libraries/react-query";

import { gql } from "graphql-request";
import { graphQLClient } from "@/libraries/graphql-request";

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

const fetch = async () => {
  const data = await graphQLClient.request(getTodosQuery);
  return data;
};

export const useTodosQuery = () => {
  return useQuery({
    queryKey: ["useTodosQuery"],
    queryFn: () => fetch(),
  });
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

const create = async (title: string) => {
  const variables = {
    makeTodoInput: { title },
  };
  const data = await graphQLClient.request(MakeTodoDocument, variables);
  return data;
};

export const useMakeTodoMutation = () => {
  const makeTodo = useMutation({
    mutationFn: (title: string) => create(title),
    onSuccess: () => {
      queryClient.invalidateQueries(["useTodosQuery"]);
    },
  });

  return { makeTodo };
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

const deleteTodo = async (id: string) => {
  const variables = {
    removeTodoInput: {
      todoId: id,
    },
  };
  const data = await graphQLClient.request(RemoveTodoDocument, variables);
  return data;
};

export const useRemoveTodoMutation = () => {
  const removeTodo = useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["useTodosQuery"]);
    },
  });

  return { removeTodo };
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type UpdateTodoInput = {
  isCompleted?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  todoId: Scalars["String"];
};

export const UpdateTodoDocument = gql`
  mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
    updateTodo(updateTodoInput: $updateTodoInput) {
      todo {
        id
        title
        isCompleted
        updatedAt
        createdAt
      }
    }
  }
`;

const completeStatus = async (id: string, isCompleted: boolean) => {
  const variables = {
    updateTodoInput: {
      todoId: id,
      isCompleted,
    },
  };
  const data = await graphQLClient.request(UpdateTodoDocument, variables);
  return data;
};

export const useUpdateTodoCompleteStatus = () => {
  const updateTodoCompleteStatus = useMutation({
    mutationFn: ({ id, isCompleted }: { id: string; isCompleted: boolean }) =>
      completeStatus(id, isCompleted),
    onSuccess: () => {
      queryClient.invalidateQueries(["useTodosQuery"]);
    },
  });

  return { updateTodoCompleteStatus };
};

const updateTitle = async (id: string, title: string) => {
  const variables = {
    updateTodoInput: {
      todoId: id,
      title,
    },
  };
  const data = await graphQLClient.request(UpdateTodoDocument, variables);
  return data;
};

export const useUpdateTodoTitle = () => {
  const updateTodoTitle = useMutation({
    mutationFn: ({ id, title }: { id: string; title: string }) =>
      updateTitle(id, title),
    onSuccess: () => {
      queryClient.invalidateQueries(["useTodosQuery"]);
    },
  });

  return { updateTodoTitle };
};
