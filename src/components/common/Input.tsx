import useInputFocus from "hooks/useInputFocus";
import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string;
  height: string;
  borderRadius?: string;
}

function Input({ width, height, borderRadius = "4px", ...rest }: InputProps) {
  const inputRef = useInputFocus();

  return (
    <StyledInput
      {...rest}
      borderRadius={borderRadius}
      width={width}
      height={height}
      ref={inputRef}
    />
  );
}

const StyledInput = styled.input<{ borderRadius: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 5px 10px;
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export default Input;
