import React from "react";

import { Checkbox, Menu, Text, Button, ActionIcon } from "@/components/shared";
import { IconDots, IconPencil, IconTrash } from "@/components/icons";

import { useStyles } from "./TodoItem.styles";

interface TodoItemProps {
  title: string;
  date: string;
  completed?: boolean;
}

export const TodoItem = ({ title, date, completed }: TodoItemProps) => {
  const { classes } = useStyles({ completed });
  return (
    <div className={classes.root}>
      <div className={classes.todoItem}>
        <Checkbox />
        <div className={classes.dataBlock}>
          <Text inline className={classes.title}>
            {title}
          </Text>
          <Text inline className={classes.dateText}>
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
          >
            Edit
          </Menu.Item>
          <Menu.Item rightSection={<IconTrash className={classes.iconTrash} />}>
            Remove
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
