import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import MainPage from "pages/MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
