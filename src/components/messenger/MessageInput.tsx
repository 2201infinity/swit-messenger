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
  replyContent: string;
}

function MessageInput({
  onKeyUp,
  content,
  onChangeMessage,
  onSendMessage,
  textAreaRef,
  replyContent,
}: MessageInputProps) {
  return (
    <InputContainer>
      <Form>
        <InputBox>
          {replyContent.length > 0 && (
            <ReplyContent dangerouslySetInnerHTML={{ __html: replyContent }} />
          )}
          <InputText
            onChange={onChangeMessage}
            onKeyPress={onKeyUp}
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
  width: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
  background-color: #ff1744;
  color: ${({ theme }) => theme.colors.white};
`;

const InputBox = styled.div`
  width: 420px;
  height: 75px;
  border: solid 2px #ffffff;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const ReplyContent = styled.div`
  height: 40px;
  border-bottom: 1px solid #999;
  padding: 5px;
  font-size: 12px;
  overflow-y: scroll;
  min-height: 40px;
  line-height: 1.4;
  ${scrollbar}
  .strong {
    font-weight: 700;
  }
`;

const InputText = styled.textarea`
  all: unset;
  width: 416px;
  flex: 1 0 auto;
  box-sizing: border-box;
  font-size: 14px;
  padding: 5px;
  word-break: break-all;
  resize: none;
  ${scrollbar}
`;
const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
