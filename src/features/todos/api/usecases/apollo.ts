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
