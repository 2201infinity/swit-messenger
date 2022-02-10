import React from "react";
import styled, { css } from "styled-components";

interface ButtonStyledProps {
  variant: "primary" | "secondary";
  width: string;
  height?: string;
  borderRadius?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyledProps {
  children: React.ReactNode;
}

export const Button = ({
  variant,
  width,
  height = "36px",
  children,
  borderRadius = "4px",
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      variant={variant}
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ theme }) => theme.fontSize.text};

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.main};
          color: ${({ theme }) => theme.colors.button};
          border: none;
          &:hover {
            background-color: ${({ theme }) => theme.colors.buttonHover};
          }
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.button};
          color: ${({ theme }) => theme.colors.main};
          border: 1px solid ${({ theme }) => theme.colors.main};
          &:hover {
            background-color: ${({ theme }) => theme.colors.buttonHover};
            color: ${({ theme }) => theme.colors.button};
          }
        `;
    }
  }};
`;
