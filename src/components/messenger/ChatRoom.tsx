import { Message } from "./Message";
import React, { useEffect } from "react";
import { IMessage } from "types/message";
import useMessenger from "./hooks/useMessenger";
import useToggle from "hooks/useToggle";
import MessageDeleteModal from "./MessageDeleteModal";
import MessageInput from "components/messenger/MessageInput";
import styled, { css } from "styled-components";
import { useState } from "react";
import { userSelecter } from "stores/user";
import { useSelector } from "react-redux";
import ImageBox from "../common/ImageBox";
import { scrollbar } from "styles/utilStyles";
import ChatHeader from "components/messenger/ChatHeader";
import { DeleteIcon, ReplyIcon } from "assets/icons";
import { useNavigate } from "react-router-dom";

export const ChatRoom = () => {
  const user = useSelector(userSelecter);
  const navigate = useNavigate();
  const [isDeleteModal, onToggleDeleteModal] = useToggle();
  const [selectedMessage, setSelectedMessage] = useState<null | IMessage>(null);
  const {
    content,
    messages,
    onChangeMessage,
    onDeleteMessage,
    onKeyUp,
    onSendMessage,
    onReplyMessage,
    textAreaRef,
    messagesEndRef,
    replyContent,
  } = useMessenger();

  const onClickDeleteButton = (message: IMessage) => {
    setSelectedMessage(message);
    onToggleDeleteModal();
  };

  const onCompleteDelete = (message: IMessage) => {
    onDeleteMessage(message);
    onToggleDeleteModal();
  };

  const isMyMessage = (userId: number) => userId === user.userId;

  useEffect(() => {
    if (!user.userId) navigate("/");
  }, [user.userId, navigate]);

  return (
    <ChatRoomContainer>
      <ChatHeader />
      <ChatRoomBox ref={messagesEndRef}>
        {messages.map((msg: IMessage) => {
          const { userName, profileImage, date, content, id, userId, reply } =
            msg;

          return (
            <MessageBox
              isMyMessage={isMyMessage(userId)}
              key={`${id}_${content}`}
            >
              {id !== 9999 ? (
                <>
                  <ImageBox imageSrc={profileImage} />
                  <MessageContainer isMyMessage={isMyMessage(userId)}>
                    <UserName className="usernameBox">
                      <span className="name">
                        {userName}
                        {isMyMessage(userId) && <span>*</span>}
                      </span>
                      <span>{date}</span>
                    </UserName>
                    <FlexBox myMessage={isMyMessage(userId)}>
                      <Message myMessage={isMyMessage(userId)}>
                        {reply && reply.length > 0 && (
                          <ReplyContent
                            dangerouslySetInnerHTML={{ __html: reply }}
                          />
                        )}
                        <ChatText
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      </Message>
                      <MessageButton>
                        <DeleteIcon onClick={() => onClickDeleteButton(msg)} />
                      </MessageButton>
                      <MessageButton>
                        <ReplyIcon onClick={() => onReplyMessage(msg)} />
                      </MessageButton>
                    </FlexBox>
                  </MessageContainer>
                </>
              ) : (
                <JoinMessage>{content}</JoinMessage>
              )}
            </MessageBox>
          );
        })}

        {isDeleteModal && selectedMessage && (
          <MessageDeleteModal
            isModal={isDeleteModal}
            onToggleModal={onToggleDeleteModal}
            onClick={() => onCompleteDelete(selectedMessage)}
            content={selectedMessage.content}
          />
        )}
      </ChatRoomBox>

      <MessageInput
        onKeyUp={onKeyUp}
        content={content}
        onChangeMessage={onChangeMessage}
        onSendMessage={onSendMessage}
        textAreaRef={textAreaRef}
        replyContent={replyContent.content}
      />
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightRed};
  display: flex;
  flex-direction: column;
`;

const ChatRoomBox = styled.div`
  background-color: transparent;
  padding: 24px 24px 0;
  overflow-y: scroll;
  flex-grow: 1;
  ${scrollbar}
`;

const MessageBox = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMyMessage ? "row-reverse" : "row")};
  align-items: flex-start;
  margin-bottom: 20px;
  span {
    font-size: ${({ theme }) => theme.fontSize.smallText};
    color: ${({ theme }) => theme.colors.gray};
    margin: 0 10px;
  }
`;

const ReplyContent = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding: 10px 0;
  margin-bottom: 10px;
  word-break: break-word;
`;

const MessageButton = styled.button`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
  svg {
    cursor: pointer;
  }
`;

const ChatText = styled.div`
  word-break: break-word;
`;

const FlexBox = styled.div<{ myMessage: boolean }>`
  display: flex;
  ${({ myMessage }) => myMessage && "flex-direction: row-reverse"}
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  margin: 0 0 5px 10px;
  display: flex;
  .name {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const MessageContainer = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMyMessage ? "flex-end" : "flex-start")};
  ${({ isMyMessage }) =>
    isMyMessage &&
    css`
      .usernameBox {
        flex-direction: row-reverse;
      }
    `}
`;

const JoinMessage = styled.p`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.text};
  /* background-color: ${({ theme }) => theme.colors.button}; */
  background-color: rgba(255, 209, 216, 0.8);
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  padding: 10px 40px;
  border-radius: 4px;
`;
