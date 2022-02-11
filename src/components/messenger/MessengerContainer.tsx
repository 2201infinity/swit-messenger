import useMessenger from "components/messenger/hooks/useMessenger";
import useToggle from "hooks/useToggle";
import React, { ReactElement, useState } from "react";
import { IMessage } from "types/message";
import MessageDeleteModal from "./MessageDeleteModal";

function MessengerContainer(): ReactElement {
  const [isDeleteModal, onToggleDeleteModal] = useToggle();
  const [selectedMessage, setSelectedMessage] = useState<null | IMessage>(null);
  const { message, messages, onSendMessage, onChangeMessage, onDeleteMessage } =
    useMessenger();
  const userId = 999888; // @Todo 로그인 구현 되면 redux에 userId 값 가져와서 넣어야함

  const onClickDeleteButton = (message: IMessage) => {
    setSelectedMessage(message);
    onToggleDeleteModal();
  };

  const onCompleteDelete = (messageId: number) => {
    onDeleteMessage(messageId);
    onToggleDeleteModal();
  };

  // @Note 아래 코드는 모두 임시 코드입니다. 합칠 때 수정해야 합니다.
  return (
    <div>
      <h1>MessengerContainer</h1>

      {messages.map((msg, index) => (
        <div key={index} style={{ textAlign: "left" }}>
          <span style={{ marginRight: "10px" }}>
            {msg.userName}
            {msg.userId === userId && <span>*</span>}
          </span>
          <span>{msg.content}</span>
          <span>{msg.date}</span>
          <button onClick={() => onClickDeleteButton(msg)}>삭제</button>
        </div>
      ))}

      <form onSubmit={onSendMessage}>
        <input type="text" value={message} onChange={onChangeMessage} />
      </form>

      {isDeleteModal && selectedMessage && (
        <MessageDeleteModal
          isModal={isDeleteModal}
          onToggleModal={onToggleDeleteModal}
          onClick={() => onCompleteDelete(selectedMessage.id)}
          content={selectedMessage.content}
        />
      )}
    </div>
  );
}

export default MessengerContainer;
