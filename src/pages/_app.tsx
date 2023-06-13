import { AppProvider } from "@/providers/app";

import type { AppPropsWithLayout } from "@/types/next";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../.mocks");
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
}
