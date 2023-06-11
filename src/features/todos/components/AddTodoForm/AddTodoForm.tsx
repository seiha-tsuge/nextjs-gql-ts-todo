import React, { useState } from "react";

import { useStyles } from "./AddTodoForm.styles";

import { Text, TextInput, Button } from "@/components/shared";

import { useMakeTodoForm } from "@/features/todos/form";
import { useMakeTodoMutation } from "@/features/todos/api/usecases";

import type { MakeTodoForm } from "@/features/todos/form/types";

export const AddTodoForm = () => {
  const form = useMakeTodoForm();

  const { makeTodo } = useMakeTodoMutation();
  const handleSubmit = async (values: MakeTodoForm) => {
    await makeTodo(values.title);
    form.reset();
  };

  const { classes } = useStyles();

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <div className={classes.root}>
        <div>
          <Text>New Todo</Text>
          <TextInput
            placeholder="Enter todo"
            {...form.getInputProps("title")}
            size="md"
          />
        </div>

        <Button type="submit">Add Todo</Button>
      </div>
    </form>
  );
};
