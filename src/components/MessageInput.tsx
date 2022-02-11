import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./common/Button";

function MessageInput() {
  const [content, setContent] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    메세지보내기();
  };

  const 메세지보내기 = () => {
    if (content.length > 0) {
      console.log("메세지 입력 완료"); // 다른 컴포넌트로 데이터 넘겨주기
      setContent("");
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" ? 메세지보내기() : console.log("null");
  };

  useEffect(() => {
    content.length === 0 ? setBtnStatus(true) : setBtnStatus(false);
  }, [content]);

  return (
    <InputContainer>
      <Form>
        <InputText
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={content}
        ></InputText>
        <Button
          variant="primary"
          width="50px"
          height="40px"
          onClick={onClick}
          disabled={btnStatus}
        >
          전송
        </Button>
      </Form>
    </InputContainer>
  );
}

export default MessageInput;

const InputContainer = styled.div`
  width: 380px;
`;
const InputText = styled.textarea`
  all: unset;
  width: 320px;
  height: 30px;
  box-sizing: border-box;
  border: solid 2px #ffffff;
  border-radius: 5px;
  font-size: 19dpx;
  resize: none;
  overflow: hidden;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
