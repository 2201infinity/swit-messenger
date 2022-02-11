import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./common/Button";
import { IMessage } from "types/message";

interface MessageInputProps {
  messages: IMessage[];
  onKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  content: string;
  onChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitMessage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function MessageInput({
  messages,
  onKeyPress,
  content,
  onChangeMessage,
  onSubmitMessage,
}: MessageInputProps) {
  return (
    <InputContainer>
      <Form>
        <InputText
          onChange={onChangeMessage}
          onKeyPress={onKeyPress}
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
  height: 100px;
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

const Message = styled.form`
  background-color: #ffffff;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
`;

const EditorContainer = styled.div`
  width: 400px;
`;
