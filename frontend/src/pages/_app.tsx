import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Space Grotesk', sans-serif",
    mono: "'IBM Plex Mono', monospace",
  },
  styles: {
    global: {
      "html, body, #__next": {
        minHeight: "100%",
        background: "#050816",
      },
      body: {
        color: "white",
      },
      "body::before": {
        content: '""',
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        background:
          "radial-gradient(circle at top, rgba(126, 170, 255, 0.08), transparent 34%), radial-gradient(circle at bottom left, rgba(138, 247, 223, 0.08), transparent 28%)",
        zIndex: 0,
      },
      "*": {
        boxSizing: "border-box",
      },
      "select option": {
        color: "#08111d",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
