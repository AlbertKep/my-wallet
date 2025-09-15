import { GlobalStyle } from "./assets/styles/GlobalStyles.ts";
import ThemeProvider from "./ThemeProvider.tsx";
const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
};

export default App;
