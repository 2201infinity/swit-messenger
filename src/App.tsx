import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { useDispatch } from "react-redux";
import { setUser } from "stores/user";
import Test from "Test";
function App() {
  const dispatch = useDispatch();

  const onClick = () => {
    const body = {
      userName: "도현",
      userId: "",
      profileImage: "",
    };
    dispatch(setUser(body));
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        첫 셋팅
        <button onClick={onClick}>상태 변경</button>
        <Test />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
