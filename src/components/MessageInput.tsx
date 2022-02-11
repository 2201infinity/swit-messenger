import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./common/Button";

function MessageInput() {
  const [content, setContent] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);
  const [messageList, setMessageList] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    if (content.length > 0) {
      setMessageList([...messageList, content]);
      setContent("");
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" ? sendMessage() : console.log("null");
  };

  useEffect(() => {
    content.length === 0 ? setBtnStatus(true) : setBtnStatus(false);
  }, [content]);

  return (
    <InputContainer>
      {messageList.map((item) => (
        <div key={`message_list_${item}`}>{item}</div>
      ))}
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
  position: fixed;
  bottom: 12px;
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
