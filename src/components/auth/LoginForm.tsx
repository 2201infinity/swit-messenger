import Button from "components/common/Button";
import Input from "components/common/Input";
import React, { ReactElement } from "react";
import styled from "styled-components";
import useLogin from "./hooks/useLogin";

function LoginForm(): ReactElement {
  const { onLogin, onChangeName, name } = useLogin();

  return (
    <Container onSubmit={onLogin}>
      <StyledInput
        width="260px"
        height="40px"
        onChange={onChangeName}
        value={name}
        placeholder="이름을 입력하세요"
      />
      <Button variant="secondary" width="260px">
        입장하기
      </Button>
    </Container>
  );
}

const Container = styled.form``;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

export default LoginForm;
