import { QueryClient } from "@tanstack/react-query";
import type { DefaultOptions, QueryClientConfig } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
};

const queryClientConfig: QueryClientConfig = {
  defaultOptions: queryConfig,
};

export const queryClient = new QueryClient(queryClientConfig);
