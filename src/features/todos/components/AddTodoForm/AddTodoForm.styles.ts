import { createStyles, rem } from "@/libraries/mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    backgroundColor: theme.white,
    borderRadius: theme.radius.xs,
    boxShadow: theme.shadows.xs,
    padding: theme.spacing.xl,
  },
}));
