import React from "react";

import { Header as SharedHeader, Text } from "@/components/shared";
import { useStyles } from "./Header.styles";

export const Header = () => {
  const { classes } = useStyles();

  return (
    <SharedHeader height={64} className={classes.header}>
      <Text className={classes.text}>Todo List</Text>
    </SharedHeader>
  );
};
