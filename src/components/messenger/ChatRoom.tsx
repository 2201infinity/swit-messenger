import { Message } from "./Message";
import React from "react";
import { IMessage } from "types/message";
import useMessenger from "./hooks/useMessenger";
import useToggle from "hooks/useToggle";
import MessageDeleteModal from "./MessageDeleteModal";
import MessageInput from "components/messenger/MessageInput";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { userSelecter } from "stores/user";
import { useSelector } from "react-redux";
import ImageBox from "../common/ImageBox";

export const ChatRoom = () => {
  const user = useSelector(userSelecter);
  const [isDeleteModal, onToggleDeleteModal] = useToggle();
  const [selectedMessage, setSelectedMessage] = useState<null | IMessage>(null);
  const {
    content,
    messages,
    onChangeMessage,
    onDeleteMessage,
    onKeyUp,
    onSubmitMessage,
  } = useMessenger();

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const onClickDeleteButton = (message: IMessage) => {
    setSelectedMessage(message);
    onToggleDeleteModal();
  };

  const onCompleteDelete = (messageId: number) => {
    onDeleteMessage(messageId);
    onToggleDeleteModal();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <ChatRoomBox>
        {messages.map((msg: IMessage) => {
          const { userName, profileImage, date, content, id } = msg;
          return (
            <MessageBox
              isMyMessage={msg.userId === user.userId}
              key={`${id}_${content}`}
            >
              <ImageBox imageSrc={profileImage} />
              <MessageContainer isMyMessage={msg.userId === user.userId}>
                <UserName>
                  {userName}
                  <span>{date}</span>
                </UserName>
                <Message myMessage={msg.userId === user.userId}>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </Message>
              </MessageContainer>
              <button onClick={() => onClickDeleteButton(msg)}>삭제</button>
            </MessageBox>
          );
        })}

        <div ref={messagesEndRef} />
        {isDeleteModal && selectedMessage && (
          <MessageDeleteModal
            isModal={isDeleteModal}
            onToggleModal={onToggleDeleteModal}
            onClick={() => onCompleteDelete(selectedMessage.id)}
            content={selectedMessage.content}
          />
        )}
      </ChatRoomBox>
      <MessageInput
        messages={messages}
        onKeyUp={onKeyUp}
        content={content}
        onChangeMessage={onChangeMessage}
        onSubmitMessage={onSubmitMessage}
      />
    </>
  );
};

const ChatRoomBox = styled.div`
  background-color: transparent;
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
`;

const MessageBox = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMyMessage ? "row-reverse" : "row")};
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  span {
    width: ${(props) => (props.isMyMessage ? "auto" : "100%")};
    font-size: ${({ theme }) => theme.fontSize.smallText};
    color: ${({ theme }) => theme.colors.gray};
    margin: 0 10px;
  }
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  margin: 0 0 5px 10px;
`;

const MessageContainer = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMyMessage ? "flex-end" : "flex-start")};
`;
