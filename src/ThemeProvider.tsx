import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme.ts";
import type { ReactNode } from "react";

type ThemeProps = {
  children: ReactNode;
};
const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
