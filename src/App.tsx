import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/GlobalStyles.ts";
import Theme from "./ThemeProvider.tsx";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Outlet />
    </Theme>
  );
};

export default App;
