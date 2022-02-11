import styled from 'styled-components';
import ImageBox from '../common/ImageBox';
import { Message } from './Message';
import { IMessage } from 'types/message';
import useMessenger from './hooks/useMessenger';
import useToggle from 'hooks/useToggle';
import MessageDeleteModal from './MessageDeleteModal';
import { useEffect, useRef, useState } from 'react';

export const ChatRoom = () => {
  // const user = useSelector(userSelecter);
  const [isDeleteModal, onToggleDeleteModal] = useToggle();
  const [selectedMessage, setSelectedMessage] = useState<null | IMessage>(null);
  const { message, messages, onChangeMessage, onDeleteMessage, onSendMessage } =
    useMessenger();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const userId = 999888; // @Todo 로그인 구현 되면 redux에 userId 값 가져와서 넣어야함

  const onClickDeleteButton = (message: IMessage) => {
    setSelectedMessage(message);
    onToggleDeleteModal();
  };

  const onCompleteDelete = (messageId: number) => {
    onDeleteMessage(messageId);
    onToggleDeleteModal();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ChatRoomBox>
      {messages.map((msg: IMessage) => {
        const { userName, profileImage, date, content } = msg;
        return (
          <div key={`${userName}_${content}`}>
            <MessageBox isMyMessage={msg.userId === userId}>
              <ImageBox imageSrc={profileImage} />
              <MessageContainer isMyMessage={msg.userId === userId}>
                <UserName>
                  {userName}
                  <span>{date}</span>
                </UserName>
                <Message myMessage={msg.userId === userId}>{content}</Message>
              </MessageContainer>
              <button onClick={() => onClickDeleteButton(msg)}>삭제</button>
            </MessageBox>
          </div>
        );
      })}
      {/** 임시 form */}
      <form onSubmit={onSendMessage}>
        <input type="text" value={message} onChange={onChangeMessage} />
      </form>

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
  flex-direction: ${(props) => (props.isMyMessage ? 'row-reverse' : 'row')};
  align-items: flex-start;
  margin-bottom: 10px;
  flex-wrap: wrap;
  span {
    width: ${(props) => (props.isMyMessage ? 'auto' : '100%')};
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
  align-items: ${(props) => (props.isMyMessage ? 'flex-end' : 'flex-start')};
`;
