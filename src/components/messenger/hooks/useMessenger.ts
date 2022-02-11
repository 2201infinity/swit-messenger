import React, { useState } from "react";
import { IMessage } from "types/message";
import MockMessages from "utils/data.json";
import { getCurrentDate } from "utils/date";

export default function useMessenger() {
  const [messages, setMessages] = useState<IMessage[]>(MockMessages.messages);
  const [message, setMessage] = useState<string>("");

  const onSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim().length > 0) {
      setMessages([
        ...messages,
        {
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

  return { messages, message, onChangeMessage, onSendMessage };
}
