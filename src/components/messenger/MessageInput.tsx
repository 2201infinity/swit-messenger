import React from "react";
import styled from "styled-components";
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
        <InputText
          onChange={onChangeMessage}
          onKeyUp={onKeyUp}
          value={content}
          ref={textAreaRef}
        />
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
const InputText = styled.textarea`
  all: unset;
  width: 320px;
  height: 75px;
  box-sizing: border-box;
  border: solid 2px #ffffff;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  resize: none;
  overflow: hidden;
  margin-right: 10px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
