import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="A feature rich web experience" />
        <link
          rel="icon"
          href="https://img.icons8.com/fluency/48/000000/online-store.png"
        />
      </Head>
      {children}
      <Footer />
    </>
  );
};
