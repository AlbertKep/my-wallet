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
