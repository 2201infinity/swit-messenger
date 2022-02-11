import { DefaultTheme } from "styled-components";

const colors = {
  main: "#ff505f",
  white: "#ffffff",
  black: "#000000",
  gray: "#737376",
  myChatBackground: "#ff505f",
  othersChatBackground: "#f5f5f5",
  button: "#ffe5e8",
  buttonHover: "#ff505f",
  border: "#E6E6E6",
};

const fontSize = {
  title: "20px",
  subTitle: "16px",
  text: "14px",
  smallText: "13px",
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
