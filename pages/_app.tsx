import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    orange: { normal: "#D87D4A", hover: "#FBAF85" },
    black: { normal: "#000000", hover: "#4C4C4C" },
    transparent: { normal: "transparent", hover: "#000000" },
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
