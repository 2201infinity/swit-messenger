import ImageBox from "components/common/ImageBox";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { userSelecter } from "stores/user";
import styled, { css } from "styled-components";
import { scrollbar } from "styles/utilStyles";
import { IMessage } from "types/message";
import { ENTRY_USER } from "utils/constants";
import ChatMessageButtons from "./ChatMessageButtons";
import Message from "./Message";

interface MessageListProps {
  messages: IMessage[];
  scrollBottomRef: React.RefObject<HTMLDivElement>;
  onClickDeleteButton: (message: IMessage) => void;
  onReplyMessage: (message: IMessage) => void;
}

function MessageList({
  messages,
  scrollBottomRef,
  onClickDeleteButton,
  onReplyMessage,
}: MessageListProps): ReactElement {
  const user = useSelector(userSelecter);
  const isMyMessage = (userId: number) => userId === user.userId;

  return (
    <Container ref={scrollBottomRef}>
      {messages.map((msg: IMessage) => {
        const { userName, profileImage, date, content, id, userId, reply } =
          msg;
        if (id === ENTRY_USER)
          return <JoinMessage key={`${id}_${content}`}>{content}</JoinMessage>;
        return (
          <MessageBox
            isMyMessage={isMyMessage(userId)}
            key={`${id}_${content}`}
          >
            <ImageBox imageSrc={profileImage} />
            <MessageContent className="messageContent">
              <UserName className="usernameBox">
                <span className="name">
                  {userName}
                  {isMyMessage(userId) && <span>*</span>}
                </span>
                <span>{date}</span>
              </UserName>

              <ContentBottom className="contentBottom">
                <Message myMessage={isMyMessage(userId)}>
                  {reply && reply.length > 0 && (
                    <ReplyContent dangerouslySetInnerHTML={{ __html: reply }} />
                  )}
                  <ChatText dangerouslySetInnerHTML={{ __html: content }} />
                </Message>
                <ChatMessageButtons
                  onDelete={() => onClickDeleteButton(msg)}
                  onReply={() => onReplyMessage(msg)}
                />
              </ContentBottom>
            </MessageContent>
          </MessageBox>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  padding: 24px 24px 0;
  overflow-y: scroll;
  flex-grow: 1;
  ${scrollbar}
`;

const MessageBox = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
  span {
    font-size: ${({ theme }) => theme.fontSize.smallText};
    color: ${({ theme }) => theme.colors.gray};
    margin: 0 10px;
  }
  ${({ isMyMessage }) =>
    isMyMessage &&
    css`
      flex-direction: row-reverse;
      .messageContent {
        align-items: flex-end;
        .usernameBox {
          flex-direction: row-reverse;
        }
        .contentBottom {
          flex-direction: row-reverse;
        }
      }
    `}
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  margin: 0 0 5px 10px;
  display: flex;
  .name {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const ContentBottom = styled.div`
  display: flex;
`;

const ReplyContent = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 10px;
  margin-bottom: 10px;
  word-break: break-word;
`;

const ChatText = styled.div`
  word-break: break-word;
`;

const JoinMessage = styled.p`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.text};
  width: 265px;
  margin-bottom: 20px;
  background-color: rgba(255, 209, 216, 0.8);
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  padding: 10px 40px;
  border-radius: 4px;
`;

export default MessageList;
