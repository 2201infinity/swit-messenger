import React, { FormEvent } from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import Input from "components/common/Input";
import { setUser } from "stores/user";
import { useDispatch } from "react-redux";
import { DanceImg } from "assets/images";
import { LogoImg } from "assets/images";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, onInputName] = useInput("");

  const onEnter = (e: FormEvent) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      alert("이름을 입력해주세요");
      return;
    }

    const body = {
      userName: name,
      userId: Math.random(),
      profileImage:
        "https://i.ibb.co/vmy2PYq/83fc4c6dca8298dc8e03ba63d35a9cae.jpg",
    };
    dispatch(setUser(body));
    navigate("/main");
  };

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
        <form onSubmit={onEnter}>
          <StyledInput
            width={"260px"}
            height={"40px"}
            onChange={onInputName}
            placeholder="이름을 입력하세요"
          />
          <Button variant={"secondary"} width={"260px"}>
            입장하기
          </Button>
        </form>
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

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;
