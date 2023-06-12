import { gql, useQuery, useMutation } from "urql";

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
  return useQuery({ query: getTodosQuery });
};

export type MakeTodoInput = {
  title: Scalars["String"];
};

export const MakeTodoDocument = `
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

export type RemoveTodoInput = {
  todoId: Scalars["String"];
};

export const RemoveTodoDocument = `
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

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type UpdateTodoInput = {
  isCompleted?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  todoId: Scalars["String"];
};

export const UpdateTodoDocument = `
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
