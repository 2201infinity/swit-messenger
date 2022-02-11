import useMessenger from "hooks/useMessenger";
import React, { ReactElement } from "react";

function MessengerContainer(): ReactElement {
  const { message, messages, onSendMessage, onChangeMessage } = useMessenger();
  const userId = 999888; // @Todo 로그인 구현 되면 redux에 userId 값 가져와서 넣어야함

  return (
    <div>
      <h1>MessengerContainer</h1>

      {messages.map((msg, index) => (
        <div key={index} style={{ textAlign: "left" }}>
          <span style={{ marginRight: "10px" }}>
            {msg.userName}
            {msg.userId === 999888 && <span>*</span>}
          </span>
          <span>{msg.content}</span>
          <span>{msg.date}</span>
        </div>
      ))}

      <form onSubmit={onSendMessage}>
        <input type="text" value={message} onChange={onChangeMessage} />
      </form>
    </div>
  );
}

export default MessengerContainer;
