/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation MakeTodo($makeTodoInput: MakeTodoInput!) {\n  makeTodo(makeTodoInput: $makeTodoInput) {\n    todo {\n      id\n      title\n      isCompleted\n      createdAt\n      updatedAt\n    }\n  }\n}": types.MakeTodoDocument,
    "mutation RemoveTodo($removeTodoInput: RemoveTodoInput!) {\n  removeTodo(removeTodoInput: $removeTodoInput) {\n    todo {\n      id\n      title\n    }\n  }\n}": types.RemoveTodoDocument,
    "mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {\n  updateTodo(updateTodoInput: $updateTodoInput) {\n    todo {\n      id\n      title\n      isCompleted\n      updatedAt\n      createdAt\n    }\n  }\n}": types.UpdateTodoDocument,
    "query Todos {\n  getTodos {\n    todos {\n      id\n      title\n      isCompleted\n      createdAt\n      updatedAt\n    }\n  }\n}": types.TodosDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation MakeTodo($makeTodoInput: MakeTodoInput!) {\n  makeTodo(makeTodoInput: $makeTodoInput) {\n    todo {\n      id\n      title\n      isCompleted\n      createdAt\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation MakeTodo($makeTodoInput: MakeTodoInput!) {\n  makeTodo(makeTodoInput: $makeTodoInput) {\n    todo {\n      id\n      title\n      isCompleted\n      createdAt\n      updatedAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveTodo($removeTodoInput: RemoveTodoInput!) {\n  removeTodo(removeTodoInput: $removeTodoInput) {\n    todo {\n      id\n      title\n    }\n  }\n}"): (typeof documents)["mutation RemoveTodo($removeTodoInput: RemoveTodoInput!) {\n  removeTodo(removeTodoInput: $removeTodoInput) {\n    todo {\n      id\n      title\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {\n  updateTodo(updateTodoInput: $updateTodoInput) {\n    todo {\n      id\n      title\n      isCompleted\n      updatedAt\n      createdAt\n    }\n  }\n}"): (typeof documents)["mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {\n  updateTodo(updateTodoInput: $updateTodoInput) {\n    todo {\n      id\n      title\n      isCompleted\n      updatedAt\n      createdAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Todos {\n  getTodos {\n    todos {\n      id\n      title\n      isCompleted\n      createdAt\n      updatedAt\n    }\n  }\n}"): (typeof documents)["query Todos {\n  getTodos {\n    todos {\n      id\n      title\n      isCompleted\n      createdAt\n      updatedAt\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;