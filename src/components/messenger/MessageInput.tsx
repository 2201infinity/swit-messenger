import React from "react";
import styled from "styled-components";
import { scrollbar } from "styles/utilStyles";
import { Button } from "../common/Button";

interface MessageInputProps {
  onKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  content: string;
  onChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSendMessage: () => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

function MessageInput({
  onKeyUp,
  content,
  onChangeMessage,
  onSendMessage,
  textAreaRef,
}: MessageInputProps) {
  return (
    <InputContainer>
      <Form>
        <InputBox>
          <InputText
            onChange={onChangeMessage}
            onKeyUp={onKeyUp}
            value={content}
            ref={textAreaRef}
          />
        </InputBox>
        <Button
          variant="primary"
          width="55px"
          height="40px"
          onClick={onSendMessage}
          disabled={content.length === 0}
        >
          보내기
        </Button>
      </Form>
    </InputContainer>
  );
}

export default MessageInput;

const InputContainer = styled.div`
  height: 100px;
  min-height: 100px;
  width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff1744;
`;

const InputBox = styled.div`
  width: 320px;
  height: 75px;
  border: solid 2px #ffffff;
  border-radius: 5px;
  margin-right: 10px;
`;

const InputText = styled.textarea`
  all: unset;
  width: 316px;
  height: 70px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 5px;
  resize: none;
  ${scrollbar}
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
