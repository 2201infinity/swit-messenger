import React, { useEffect, useRef, useState } from "react";
import { IMessage } from "types/message";
import MockMessages from "utils/data.json";
import { getCurrentDate } from "utils/date";
import { useSelector } from "react-redux";
import { userSelecter } from "stores/user";

export default function useMessenger() {
  const [messages, setMessages] = useState<IMessage[]>(MockMessages.messages);
  const [content, setContent] = useState<string>("");
  const { userId, profileImage, userName } = useSelector(userSelecter);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSendMessage = () => {
    if (content.trim().length === 0) return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        userId,
        userName,
        profileImage,
        date: getCurrentDate(),
        content: content.replace(/(\n|\r\n)/g, "<br />"),
      },
    ]);
    setContent("");
  };

  const onSubmitMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSendMessage();
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" && !e.shiftKey ? onSendMessage() : console.log(null);
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onDeleteMessage = (messageId: number) => {
    setMessages(messages.filter((message) => message.id !== messageId));
  };

  const onReplyMessage = (message: IMessage) => {
    const body = `${message.userName}
${message.content}
(회신)
`;
    setContent((prev) => body + prev);
    textAreaRef.current?.focus();
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  return {
    messages,
    content,
    onChangeMessage,
    onDeleteMessage,
    onKeyUp,
    onSubmitMessage,
    onReplyMessage,
    textAreaRef,
  };
}
