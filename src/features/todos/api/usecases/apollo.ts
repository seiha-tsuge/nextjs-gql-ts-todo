import { useQuery, useMutation } from "@apollo/client";
import { getTodosQuery } from "@/features/todos/api/graphql/queries";
import {
  MakeTodoDocument,
  RemoveTodoDocument,
  UpdateTodoDocument,
} from "@/features/todos/api/graphql/mutations";

export const useTodosQuery = () => {
  return useQuery(getTodosQuery);
};

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

export const useUpdateTodoCompleteStatus = () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(UpdateTodoDocument);

  const updateTodoCompleteStatus = (id: string, isCompleted: boolean) => {
    const updateTodoCompleteStatus = mutateFunction({
      variables: {
        updateTodoInput: {
          todoId: id,
          isCompleted,
        },
      },
      refetchQueries: [getTodosQuery],
    });

    return updateTodoCompleteStatus;
  };

  return { updateTodoCompleteStatus, data, loading, error };
};

export const useUpdateTodoTitle = () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(UpdateTodoDocument);

  const updateTodoTitle = (id: string, title: string) => {
    const updateTodoTitle = mutateFunction({
      variables: {
        updateTodoInput: {
          todoId: id,
          title,
        },
      },
      refetchQueries: [getTodosQuery],
    });

    return updateTodoTitle;
  };

  return { updateTodoTitle, data, loading, error };
};
