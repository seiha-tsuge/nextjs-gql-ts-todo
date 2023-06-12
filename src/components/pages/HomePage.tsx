import React from "react";

import { useStyles } from "./HomePage.styles";

import { AddTodoForm, TodoItem } from "@/features/todos/components";

// import { useTodosQuery } from "@/features/todos/api/usecases/apollo";
// import { useTodosQuery } from "@/features/todos/api/usecases/urql";
import { useTodosQuery } from "@/features/todos/api/usecases/react-query";

export const HomePage = () => {
  // apollo
  // const { data } = useTodosQuery();

  // urql
  // const [result] = useTodosQuery();
  // const { data } = result;

  // react-query
  const { data } = useTodosQuery();

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <AddTodoForm />
        {data?.getTodos?.todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            date={todo.updatedAt}
            completed={todo.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};
