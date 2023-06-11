import { createStyles, rem } from "@/libraries/mantine/core";

interface TodoItemStylesProps {
  completed?: boolean;
}

const icon = {
  width: rem(20),
  height: rem(20),
  strokeWidth: 1.25,
};

export const useStyles = createStyles(
  (theme, { completed }: TodoItemStylesProps) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: theme.spacing.md,
      padding: theme.spacing.xl,
      borderLeftWidth: rem(8),
      borderLeftStyle: "solid",
      borderLeftColor: completed ? theme.colors.green[6] : theme.colors.blue[6],
      backgroundColor: theme.white,
      borderRadius: theme.radius.xs,
      boxShadow: theme.shadows.xs,
    },

    todoItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: theme.spacing.md,
    },

    title: {
      color: completed ? theme.colors.green[6] : theme.black,
      textDecoration: completed ? "line-through" : "none",
    },

    dataBlock: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: rem(4),
    },

    dateText: {
      fontSize: theme.fontSizes.xs,
      color: theme.colors.gray[6],
    },

    iconDots: {
      ...icon,
    },

    iconPencil: {
      ...icon,
    },

    iconTrash: {
      ...icon,
      stroke: theme.colors.red[6],
    },
  })
);
