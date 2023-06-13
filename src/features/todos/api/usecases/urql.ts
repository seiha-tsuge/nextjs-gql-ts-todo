import { useQuery, useMutation } from "urql";
import { getTodosQuery } from "@/features/todos/api/graphql/queries";
import {
  MakeTodoDocument,
  RemoveTodoDocument,
  UpdateTodoDocument,
} from "@/features/todos/api/graphql/mutations";

export const useTodosQuery = () => {
  return useQuery({ query: getTodosQuery });
};

export const useMakeTodoMutation = () => {
  const [{ fetching, data, error }, mutateFunction] =
    useMutation(MakeTodoDocument);

  const makeTodo = (title: string) => {
    const makeTodo = mutateFunction({
      makeTodoInput: {
        title,
      },
    });

    return makeTodo;
  };

  return { makeTodo, fetching, data, error };
};

export const useRemoveTodoMutation = () => {
  const [{ fetching, data, error }, mutateFunction] =
    useMutation(RemoveTodoDocument);

  const removeTodo = (id: string) => {
    const removeTodo = mutateFunction({
      removeTodoInput: {
        todoId: id,
      },
    });

    return removeTodo;
  };

  return { removeTodo, fetching, data, error };
};

export const useUpdateTodoCompleteStatus = () => {
  const [{ fetching, data, error }, mutateFunction] =
    useMutation(UpdateTodoDocument);

  const updateTodoCompleteStatus = (id: string, isCompleted: boolean) => {
    const updateTodoCompleteStatus = mutateFunction({
      updateTodoInput: {
        todoId: id,
        isCompleted,
      },
    });

    return updateTodoCompleteStatus;
  };

  return { updateTodoCompleteStatus, fetching, data, error };
};

export const useUpdateTodoTitle = () => {
  const [{ fetching, data, error }, mutateFunction] =
    useMutation(UpdateTodoDocument);

  const updateTodoTitle = (id: string, title: string) => {
    const updateTodoTitle = mutateFunction({
      updateTodoInput: {
        todoId: id,
        title,
      },
    });

    return updateTodoTitle;
  };

  return { updateTodoTitle, fetching, data, error };
};
