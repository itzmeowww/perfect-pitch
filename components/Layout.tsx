import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Perfect Pitch" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' ws: data: gap: https://ssl.gstatic.com 'unsafe-eval' 'unsafe-inline';child-src 'self' blob: * ;style-src 'self' 'unsafe-inline' http://fonts.googleapis.com/;font-src *;media-src 'self' blob: data: "
        />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
