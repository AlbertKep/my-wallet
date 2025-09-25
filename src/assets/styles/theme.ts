import { type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    orange: "#FF9A31",
    yellow: "#FFDC18",
    darkBlue: "#021F40",
    red: "#FF2031",
    green: "#0AAB55",
    lightBeige: "#FEF1DF",
  },
  font: {
    family: {
      montserrat: '"Montserrat", sans-serif',
    },
  },
  mq: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    bigDesktop: "@media (min-width: 1280px)",
    huge: "@media (min-width: 1440px)",
  },
};
