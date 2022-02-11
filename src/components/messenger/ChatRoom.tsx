import styled from "styled-components";
import ImageBox from "../common/ImageBox";
import { Message } from "./Message";
import { IMessage } from "types/message";
import useMessenger from "./hooks/useMessenger";
import useToggle from "hooks/useToggle";
import MessageDeleteModal from "./MessageDeleteModal";
import { useState } from "react";
import MessageInput from "components/MessageInput";

export const ChatRoom = () => {
  // const user = useSelector(userSelecter);
  const [isDeleteModal, onToggleDeleteModal] = useToggle();
  const [selectedMessage, setSelectedMessage] = useState<null | IMessage>(null);
  const {
    content,
    messages,
    onChangeMessage,
    onDeleteMessage,
    onSendMessage,
    onKeyPress,
    onSubmitMessage,
  } = useMessenger();

  const userId = 999888; // @Todo 로그인 구현 되면 redux에 userId 값 가져와서 넣어야함

  const onClickDeleteButton = (message: IMessage) => {
    setSelectedMessage(message);
    onToggleDeleteModal();
  };

  const onCompleteDelete = (messageId: number) => {
    onDeleteMessage(messageId);
    onToggleDeleteModal();
  };

  return (
    <>
      <ChatRoomBox>
        {messages.map((msg: IMessage) => {
          const { userName, profileImage, date, content } = msg;
          return (
            <div key={`${userName}_${content}`}>
              <MessageBox isMyMessage={msg.userId === userId}>
                <ImageBox imageSrc={profileImage} />
                <Message myMessage={false}>{content}</Message>
                <span>{date}</span>
                <button onClick={() => onClickDeleteButton(msg)}>삭제</button>
              </MessageBox>
            </div>
          );
        })}

        {/* <form onSubmit={onSendMessage}>
        <input type="text" value={message} onChange={onChangeMessage} />
      </form> */}

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
        onKeyPress={onKeyPress}
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
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  span {
    width: ${(props) => (props.isMyMessage ? "auto" : "100%")};
    font-size: ${({ theme }) => theme.fontSize.smallText};
    color: ${({ theme }) => theme.colors.gray};
    margin-top: 10px;
  }
`;
