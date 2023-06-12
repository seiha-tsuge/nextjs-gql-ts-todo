/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type GetTodoInput = {
  todoId: Scalars['String']['input'];
};

export type GetTodoResponse = {
  __typename?: 'GetTodoResponse';
  todo: Todo;
};

export type GetTodosResponse = {
  __typename?: 'GetTodosResponse';
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type MakeTodoInput = {
  title: Scalars['String']['input'];
};

export type MakeTodoResponse = {
  __typename?: 'MakeTodoResponse';
  todo: Todo;
};

export type Mutation = {
  __typename?: 'Mutation';
  makeTodo: MakeTodoResponse;
  removeTodo: RemoveTodoResponse;
  updateTodo: UpdateTodoResponse;
};


export type MutationMakeTodoArgs = {
  makeTodoInput: MakeTodoInput;
};


export type MutationRemoveTodoArgs = {
  removeTodoInput: RemoveTodoInput;
};


export type MutationUpdateTodoArgs = {
  updateTodoInput: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodo: GetTodoResponse;
  getTodos?: Maybe<GetTodosResponse>;
  greet?: Maybe<Scalars['String']['output']>;
};


export type QueryGetTodoArgs = {
  getTodoInput: GetTodoInput;
};

export type RemoveTodoInput = {
  todoId: Scalars['String']['input'];
};

export type RemoveTodoResponse = {
  __typename?: 'RemoveTodoResponse';
  todo: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateTodoInput = {
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  todoId: Scalars['String']['input'];
};

export type UpdateTodoResponse = {
  __typename?: 'UpdateTodoResponse';
  todo: Todo;
};

export type MakeTodoMutationVariables = Exact<{
  makeTodoInput: MakeTodoInput;
}>;


export type MakeTodoMutation = { __typename?: 'Mutation', makeTodo: { __typename?: 'MakeTodoResponse', todo: { __typename?: 'Todo', id: string, title: string, isCompleted: boolean, createdAt: any, updatedAt: any } } };

export type RemoveTodoMutationVariables = Exact<{
  removeTodoInput: RemoveTodoInput;
}>;


export type RemoveTodoMutation = { __typename?: 'Mutation', removeTodo: { __typename?: 'RemoveTodoResponse', todo: { __typename?: 'Todo', id: string, title: string } } };

export type UpdateTodoMutationVariables = Exact<{
  updateTodoInput: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'UpdateTodoResponse', todo: { __typename?: 'Todo', id: string, title: string, isCompleted: boolean, updatedAt: any, createdAt: any } } };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', getTodos?: { __typename?: 'GetTodosResponse', todos?: Array<{ __typename?: 'Todo', id: string, title: string, isCompleted: boolean, createdAt: any, updatedAt: any } | null> | null } | null };


export const MakeTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MakeTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"makeTodoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MakeTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"makeTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"makeTodoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"makeTodoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<MakeTodoMutation, MakeTodoMutationVariables>;
export const RemoveTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeTodoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"removeTodoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeTodoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveTodoMutation, RemoveTodoMutationVariables>;
export const UpdateTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTodoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTodoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTodoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const TodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTodos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<TodosQuery, TodosQueryVariables>;