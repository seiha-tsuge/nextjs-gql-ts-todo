import { graphql } from "msw";
import { faker } from "@faker-js/faker";
import { factory, primaryKey } from "@mswjs/data";
import type {
  Todo,
  TodosQuery,
  MakeTodoMutation,
  MakeTodoMutationVariables,
  RemoveTodoMutation,
  RemoveTodoMutationVariables,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
} from "../src/generated/gql/graphql";

const db = factory({
  todos: {
    id: primaryKey(faker.string.uuid),
    title: () => faker.string.alpha(10),
    isCompleted: Boolean,
    createdAt: () => new Date().toISOString(),
    updatedAt: () => new Date().toISOString(),
  },
});

for (let i = 0; i < 5; i++) {
  db.todos.create();
}

export const handlers = [
  graphql.query<TodosQuery>("Todos", (req, res, ctx) => {
    const todos: Todo[] = db.todos.getAll().map((todo) => ({
      __typename: "Todo",
      id: todo.id,
      title: todo.title,
      isCompleted: todo.isCompleted,
      createdAt: new Date(todo.createdAt),
      updatedAt: new Date(todo.updatedAt),
    }));

    return res(
      ctx.data({
        __typename: "Query",
        getTodos: {
          __typename: "GetTodosResponse",
          todos: [...todos],
        },
      })
    );
  }),

  graphql.mutation<MakeTodoMutation, MakeTodoMutationVariables>(
    "MakeTodo",
    (req, res, ctx) => {
      const { id, title, isCompleted, createdAt, updatedAt } = db.todos.create({
        title: req.variables.makeTodoInput.title,
        isCompleted: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      return res(
        ctx.data({
          __typename: "Mutation",
          makeTodo: {
            __typename: "MakeTodoResponse",
            todo: {
              __typename: "Todo",
              id,
              title,
              isCompleted,
              createdAt: new Date(createdAt),
              updatedAt: new Date(updatedAt),
            },
          },
        })
      );
    }
  ),

  graphql.mutation<RemoveTodoMutation, RemoveTodoMutationVariables>(
    "RemoveTodo",
    (req, res, ctx) => {
      const deletedTodo = db.todos.delete({
        where: {
          id: {
            equals: req.variables.removeTodoInput.todoId,
          },
        },
      });

      return res(
        ctx.data({
          __typename: "Mutation",
          removeTodo: {
            __typename: "RemoveTodoResponse",
            todo: {
              __typename: "Todo",
              id: deletedTodo!.id,
              title: deletedTodo!.title,
            },
          },
        })
      );
    }
  ),

  graphql.mutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    "UpdateTodo",
    (req, res, ctx) => {
      const { todoId, isCompleted, title } = req.variables.updateTodoInput;
      const todo = db.todos.findFirst({
        where: {
          id: {
            equals: todoId,
          },
        },
      });

      const updatedTodo = db.todos.update({
        where: {
          id: {
            equals: todoId,
          },
        },
        data: {
          title: title === undefined ? todo!.title : String(title),
          isCompleted:
            isCompleted === undefined
              ? todo!.isCompleted
              : Boolean(isCompleted),
          updatedAt: new Date().toISOString(),
        },
      });

      return res(
        ctx.data({
          __typename: "Mutation",
          updateTodo: {
            __typename: "UpdateTodoResponse",
            todo: {
              __typename: "Todo",
              id: todo!.id,
              title: title ? title : updatedTodo!.title,
              isCompleted: isCompleted ? isCompleted : updatedTodo!.isCompleted,
              createdAt: new Date(todo!.createdAt),
              updatedAt: new Date(updatedTodo!.updatedAt),
            },
          },
        })
      );
    }
  ),
];
