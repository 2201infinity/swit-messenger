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
        if (id === ENTRY_USER) return <JoinMessage>{content}</JoinMessage>;
        return (
          <MessageBox
            isMyMessage={isMyMessage(userId)}
            key={`${id}_${content}`}
          >
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
                    <ReplyContent dangerouslySetInnerHTML={{ __html: reply }} />
                  )}
                  <ChatText dangerouslySetInnerHTML={{ __html: content }} />
                </Message>
                <ChatMessageButtons
                  onDelete={() => onClickDeleteButton(msg)}
                  onReply={() => onReplyMessage(msg)}
                />
              </FlexBox>
            </MessageContainer>
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
  flex-direction: ${(props) => (props.isMyMessage ? "row-reverse" : "row")};
  align-items: flex-start;
  margin-bottom: 20px;
  span {
    font-size: ${({ theme }) => theme.fontSize.smallText};
    color: ${({ theme }) => theme.colors.gray};
    margin: 0 10px;
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

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  margin: 0 0 5px 10px;
  display: flex;
  .name {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const FlexBox = styled.div<{ myMessage: boolean }>`
  display: flex;
  ${({ myMessage }) => myMessage && "flex-direction: row-reverse"}
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
