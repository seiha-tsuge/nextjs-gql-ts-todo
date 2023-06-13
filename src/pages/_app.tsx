import { AppProvider } from "@/providers/app";

import type { AppPropsWithLayout } from "@/types/next";

// https://github.com/mswjs/msw/issues/1340
// https://github.com/mswjs/msw/discussions/1049
// https://github.com/vercel/next.js/discussions/39695
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  await import("../../.mocks");
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
}
