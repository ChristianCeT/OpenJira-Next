import type { AppProps } from "next/app";
import { EntriesProvider } from "@/context/entries";
import { UIProvider } from "@/context/ui";
import "@/styles/globals.css";
import { CssBaseline, Snackbar, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@/themes";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}
