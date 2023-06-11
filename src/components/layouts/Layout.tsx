import React from "react";

import { AppShell } from "@/components/shared";

import { Header } from "./Header/Header";
import { useStyles } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();
  return (
    <AppShell header={<Header />} padding={0}>
      <div className={classes.main}>{children}</div>
    </AppShell>
  );
};

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;
