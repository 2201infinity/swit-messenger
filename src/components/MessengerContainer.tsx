import useMessenger from "hooks/useMessenger";
import React, { ReactElement } from "react";

function MessengerContainer(): ReactElement {
  const { message, messages, onSendMessage, onChangeMessage } = useMessenger();

  return (
    <div>
      <h1>MessengerContainer</h1>

      {messages.map((msg, index) => (
        <div key={index}>{msg.content}</div>
      ))}

      <form onSubmit={onSendMessage}>
        <input type="text" value={message} onChange={onChangeMessage} />
      </form>
    </div>
  );
}

export default MessengerContainer;
