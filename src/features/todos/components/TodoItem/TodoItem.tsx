import React, { useState } from "react";

import {
  Checkbox,
  Menu,
  Text,
  ActionIcon,
  TextInput,
} from "@/components/shared";
import { IconDots, IconPencil, IconTrash } from "@/components/icons";

// import {
//   useRemoveTodoMutation,
//   useUpdateTodoCompleteStatus,
//   useUpdateTodoTitle,
// } from "@/features/todos/api/usecases/apollo";

import {
  useRemoveTodoMutation,
  useUpdateTodoCompleteStatus,
  useUpdateTodoTitle,
} from "@/features/todos/api/usecases/urql";

import { useTodoForm } from "@/features/todos/form";

import { useStyles } from "./TodoItem.styles";

interface TodoItemProps {
  id: string;
  title: string;
  date: string;
  completed: boolean;
}

export const TodoItem = ({ id, title, date, completed }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useTodoForm({ title, completed });

  const { removeTodo } = useRemoveTodoMutation();
  const handleRemoveTodo = async () => {
    await removeTodo(id);
  };

  const { updateTodoCompleteStatus } = useUpdateTodoCompleteStatus();
  const handleCompleteTodoCheckboxChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async (event) => {
    await updateTodoCompleteStatus(id, event.target.checked);
  };

  const { updateTodoTitle } = useUpdateTodoTitle();
  const handleTodoTitleInputBlur: React.FocusEventHandler<
    HTMLInputElement
  > = async (event) => {
    form.validate();
    if (!form.isValid()) return;
    await updateTodoTitle(id, form.getInputProps("title").value);
    setIsEditing(false);
  };

  const { classes } = useStyles({ completed });

  return (
    <div className={classes.root}>
      <div className={classes.todoItem}>
        <Checkbox
          checked={completed}
          onChange={handleCompleteTodoCheckboxChange}
        />
        <div className={classes.dataBlock}>
          {isEditing ? (
            <TextInput
              {...form.getInputProps("title")}
              autoFocus
              onBlur={handleTodoTitleInputBlur}
            />
          ) : (
            <Text inline className={classes.title}>
              {title}
            </Text>
          )}
          <Text
            inline
            {...form.getInputProps("title")}
            className={classes.dateText}
          >
            {date}
          </Text>
        </div>
      </div>

      <Menu shadow="md" width={200} position="bottom-end">
        <Menu.Target>
          <ActionIcon radius="xl" color="gray.9">
            <IconDots className={classes.iconDots} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            rightSection={<IconPencil className={classes.iconPencil} />}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Menu.Item>
          <Menu.Item
            rightSection={<IconTrash className={classes.iconTrash} />}
            onClick={handleRemoveTodo}
          >
            Remove
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
