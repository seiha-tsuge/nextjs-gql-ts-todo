import { graphql } from "@/generated/gql";

export const MakeTodoDocument = graphql(/* GraphQL */ `
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
`);

export const RemoveTodoDocument = graphql(/* GraphQL */ `
  mutation RemoveTodo($removeTodoInput: RemoveTodoInput!) {
    removeTodo(removeTodoInput: $removeTodoInput) {
      todo {
        id
        title
      }
    }
  }
`);

export const UpdateTodoDocument = graphql(/* GraphQL */ `
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
`);
