import React from "react";

import { useStyles } from "./HomePage.styles";

import { AddTodoForm, TodoItem } from "@/features/todos/components";

import { useTodosQuery } from "@/features/todos/api/usecases";

export const HomePage = () => {
  const { data } = useTodosQuery();
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <AddTodoForm />
        {data?.getTodos?.todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            date={todo.updatedAt}
            completed={todo.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};
