import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";
import { IMessage } from "types/message";

interface MessageInputProps {
  messages: IMessage[];
  onKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  content: string;
  onChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitMessage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function MessageInput({
  messages,
  onKeyUp,
  content,
  onChangeMessage,
  onSubmitMessage,
}: MessageInputProps) {
  return (
    <InputContainer>
      <Form>
        <InputText
          onChange={onChangeMessage}
          onKeyUp={onKeyUp}
          value={content}
        />
        <Button
          variant="primary"
          width="55px"
          height="40px"
          onClick={onSubmitMessage}
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
  height: 64px;
  width: 420px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff1744;
`;
const InputText = styled.textarea`
  all: unset;
  width: 320px;
  height: 50px;
  box-sizing: border-box;
  border: solid 2px #ffffff;
  border-radius: 5px;
  font-size: 19dpx;
  resize: none;
  overflow: hidden;
  margin-right: 10px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
