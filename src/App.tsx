import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        첫 셋팅
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
