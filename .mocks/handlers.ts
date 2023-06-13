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
        getTodos: {
          todos: [
            {
              id: "1",
              title: "Todo 1",
              isCompleted: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: "2",
              title: "Todo 2",
              isCompleted: false,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
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
          makeTodo: {
            todo: {
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
          removeTodo: {
            todo: {
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
          updateTodo: {
            todo: {
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
