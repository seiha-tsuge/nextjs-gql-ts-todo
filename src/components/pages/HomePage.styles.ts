import { createStyles, rem } from "@/libraries/mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${rem(theme.spacing.xl)} ${rem(0)}`,
  },

  container: {
    width: rem(520),
    display: "flex",
    flexDirection: "column",
    gap: rem(theme.spacing.md),
  },
}));
