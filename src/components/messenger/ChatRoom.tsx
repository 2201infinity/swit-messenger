import React, { ReactElement } from "react";
import { IMessage } from "types/message";
import useMessenger from "./hooks/useMessenger";
import MessageDeleteModal from "./MessageDeleteModal";
import MessageInput from "components/messenger/MessageInput";
import styled from "styled-components";
import { useState } from "react";
import ChatHeader from "components/messenger/ChatHeader";
import { useCheckUserEffect, useScrollToBottom, useToggle } from "hooks";
import MessageList from "./MessageList";

function ChatRoom(): ReactElement {
  const [isDeleteModal, onToggleDeleteModal] = useToggle();
  const [selectedMessage, setSelectedMessage] = useState<null | IMessage>(null);
  const {
    content,
    messages,
    onChangeMessage,
    onDeleteMessage,
    onKeyPress,
    onSendMessage,
    onReplyMessage,
    textAreaRef,
    replyContent,
  } = useMessenger();

  useCheckUserEffect();
  const scrollBottomRef = useScrollToBottom(messages);

  const onClickDeleteButton = (message: IMessage) => {
    setSelectedMessage(message);
    onToggleDeleteModal();
  };

  const onCompleteDelete = (message: IMessage) => {
    onDeleteMessage(message);
    onToggleDeleteModal();
  };

  return (
    <ChatRoomContainer>
      <ChatHeader />
      <MessageList
        messages={messages}
        scrollBottomRef={scrollBottomRef}
        onReplyMessage={onReplyMessage}
        onClickDeleteButton={onClickDeleteButton}
      />

      {isDeleteModal && selectedMessage && (
        <MessageDeleteModal
          isModal={isDeleteModal}
          onToggleModal={onToggleDeleteModal}
          onClick={() => onCompleteDelete(selectedMessage)}
          content={selectedMessage.content}
        />
      )}

      <MessageInput
        onKeyPress={onKeyPress}
        content={content}
        onChangeMessage={onChangeMessage}
        onSendMessage={onSendMessage}
        textAreaRef={textAreaRef}
        replyContent={replyContent.content}
      />
    </ChatRoomContainer>
  );
}

const ChatRoomContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightRed};
  display: flex;
  flex-direction: column;
`;

export default ChatRoom;
