import {
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
  InitColorSchemeScript,
} from "@mui/material";
import type { ReactNode } from "react";
import { theme } from "@/shared/config/theme";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <>
      <InitColorSchemeScript attribute="class" />
      <MUIThemeProvider theme={theme} noSsr defaultMode="system">
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </>
  );
};
