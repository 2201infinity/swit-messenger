import React, { ReactElement } from "react";
import styled from "styled-components";
import { DanceImg, LogoImg } from "assets/images";
import LoginForm from "components/auth/LoginForm";

function LoginPage(): ReactElement {
  return (
    <Container>
      <Content>
        <Logo src={LogoImg} alt="logo" />
        <h1>
          업무 최적화를 돕는
          <br />
          Work OS 올인원 협업툴
        </h1>
        <StyledImg src={DanceImg} alt="dance-image" />
        <LoginForm />
      </Content>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  height: auto;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  text-align: center;
  width: 420px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 10%);

  h1 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.text};
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 25px;
  }
`;

const Logo = styled.img`
  width: 140px;
  margin-bottom: 15px;
`;
const StyledImg = styled.img`
  border-radius: 15px;
  width: 260px;
  margin-bottom: 30px;
`;
