import "../theme/font.css";
import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

import customTheme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
