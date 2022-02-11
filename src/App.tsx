import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import theme from "styles/theme";
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
