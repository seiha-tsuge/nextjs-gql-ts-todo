import { createStyles, rem } from "@/libraries/mantine/core";

export const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    padding: `${rem(theme.spacing.lg)} ${rem(theme.spacing.xl)}`,
  },
  text: {
    color: theme.colors.dark[9],
    fontWeight: 700,
  },
}));
