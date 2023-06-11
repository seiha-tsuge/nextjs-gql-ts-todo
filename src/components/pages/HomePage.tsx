import React from "react";

import { useStyles } from "./HomePage.styles";

import { AddTodoForm, TodoItem } from "@/features/todos/components";

export const HomePage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <AddTodoForm />
        <TodoItem title="test" date="2021-23-56" />
        <TodoItem title="test" date="2021-23-56" completed />
      </div>
    </div>
  );
};
