import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/GlobalStyles.ts";
import Theme from "./ThemeProvider.tsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Toaster />
      <Outlet />
    </Theme>
  );
};

export default App;
