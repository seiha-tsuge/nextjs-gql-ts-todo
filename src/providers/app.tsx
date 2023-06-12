import React from "react";

import { MantineProvider } from "@mantine/core";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/libraries/apollo-client";

import { Provider } from "urql";
import { urqlClient } from "@/libraries/urql";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libraries/react-query";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ApolloProvider client={apolloClient}>
        <Provider value={urqlClient}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </ApolloProvider>
    </MantineProvider>
  );
};
