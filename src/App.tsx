import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import { Path } from "utils/constants";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path={Path.Home} element={<LoginPage />} />
        <Route path={Path.Chat} element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
