import React from "react";

import { useStyles } from "./AddTodoForm.styles";

import { Text, TextInput, Button } from "@/components/shared";

export const AddTodoForm = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Text>New Todo</Text>
        <TextInput placeholder="Enter todo" size="md" />
      </div>

      <Button>Add Todo</Button>
    </div>
  );
};
