import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";

interface MessageInputProps {
  onKeyUp: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  content: string;
  onChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitMessage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

function MessageInput({
  onKeyUp,
  content,
  onChangeMessage,
  onSubmitMessage,
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
  height: 130px;
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
  height: 100px;
  box-sizing: border-box;
  border: solid 2px #ffffff;
  border-radius: 5px;
  font-size: 19px;
  resize: none;
  overflow: hidden;
  margin-right: 10px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
