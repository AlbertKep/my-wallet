import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      orange: string;
      yellow: string;
      darkBlue: string;
      red: string;
      green: string;
      lightBeige: string;
      warmBeige: string;
      lightPink: string;
      primaryViolet: string;
    };
    font: {
      family: {
        montserrat: string;
      };
    };
    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
  }
}
