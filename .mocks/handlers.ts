import { graphql } from "msw";
import { factory, primaryKey } from "@mswjs/data";
import type {
  TodosQuery,
  MakeTodoMutation,
  MakeTodoMutationVariables,
  RemoveTodoMutation,
  RemoveTodoMutationVariables,
  UpdateTodoMutation,
  UpdateTodoMutationVariables,
} from "../src/generated/gql/graphql";

const db = factory({
  todo: {
    id: primaryKey(String),
    title: String,
  },
});

const todos = db.todo.toHandlers("graphql");

export const handlers = [
  graphql.query<TodosQuery>("Todos", (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: "Query",
        getTodos: {
          __typename: "GetTodosResponse",
          todos: [
            {
              __typename: "Todo",
              id: "1",
              title: "Todo 1",
              isCompleted: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              __typename: "Todo",
              id: "2",
              title: "Todo 2",
              isCompleted: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              __typename: "Todo",
              id: "3",
              title: "Todo 3",
              isCompleted: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        },
      })
    );
  }),

  graphql.mutation<MakeTodoMutation, MakeTodoMutationVariables>(
    "MakeTodo",
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Mutation",
          makeTodo: {
            __typename: "MakeTodoResponse",
            todo: {
              __typename: "Todo",
              id: "ac56032b-dc31-4937-90a3-444960d793c8",
              title: req.variables.makeTodoInput.title,
              isCompleted: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        })
      );
    }
  ),

  graphql.mutation<RemoveTodoMutation, RemoveTodoMutationVariables>(
    "RemoveTodo",
    (req, res, ctx) => {
      return res(
        ctx.data({
          __typename: "Mutation",
          removeTodo: {
            __typename: "RemoveTodoResponse",
            todo: {
              __typename: "Todo",
              id: req.variables.removeTodoInput.todoId,
              title: "Todo 1",
            },
          },
        })
      );
    }
  ),

  graphql.mutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    "UpdateTodo",
    (req, res, ctx) => {
      const { isCompleted, title } = req.variables.updateTodoInput;
      return res(
        ctx.data({
          __typename: "Mutation",
          updateTodo: {
            __typename: "UpdateTodoResponse",
            todo: {
              __typename: "Todo",
              id: "ac56032b-dc31-4937-90a3-444960d793c8",
              title: title ? title : "Todo 1",
              isCompleted: isCompleted ? isCompleted : false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        })
      );
    }
  ),
];
