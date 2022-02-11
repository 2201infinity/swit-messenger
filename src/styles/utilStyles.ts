import { css } from "styled-components";
import { colors } from "./theme";

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grayLight};
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
`;
