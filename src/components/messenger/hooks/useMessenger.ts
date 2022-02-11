import React, { useState } from "react";
import { IMessage } from "types/message";
import MockMessages from "utils/data.json";
import { getCurrentDate } from "utils/date";

export default function useMessenger() {
  const [messages, setMessages] = useState<IMessage[]>(MockMessages.messages);
  const [message, setMessage] = useState<string>("");

  // @Note 임시로 만든 메세지 보내는 함수 입니다. 나중에 예지님이 구현하신 코드로 대체할 예정입니다~
  const onSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim().length > 0) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          userId: 999888,
          userName: "도도도",
          profileImage: "https://i.ibb.co/LNw3QCV/image.png",
          content: message,
          date: getCurrentDate(),
        },
      ]);
      setMessage("");
    }
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onDeleteMessage = (messageId: number) => {
    setMessages(messages.filter((message) => message.id !== messageId));
  };

  return { messages, message, onChangeMessage, onSendMessage, onDeleteMessage };
}
