import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "../src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
