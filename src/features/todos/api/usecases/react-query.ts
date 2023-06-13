import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/libraries/react-query";

import { graphQLClient } from "@/libraries/graphql-request";
import { getTodosQuery } from "@/features/todos/api/graphql/queries";
import {
  MakeTodoDocument,
  RemoveTodoDocument,
  UpdateTodoDocument,
} from "@/features/todos/api/graphql/mutations";

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
