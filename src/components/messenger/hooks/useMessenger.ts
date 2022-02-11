import React, { useRef, useState } from "react";
import { IMessage } from "types/message";
import MockMessages from "utils/data.json";
import { getCurrentDate } from "utils/date";
import { useSelector } from "react-redux";
import { userSelecter } from "stores/user";

export default function useMessenger() {
  const [messages, setMessages] = useState<IMessage[]>(MockMessages.messages);
  const [content, setContent] = useState<string>("");
  const [replyContent, setReplyContent] = useState<string>("");
  const { userId, profileImage, userName } = useSelector(userSelecter);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSendMessage = async () => {
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
        reply: replyContent,
      },
    ]);
    setContent("");
    setReplyContent("");
    setTimeout(() => {
      scrollToBottom();
    }, 10);
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) onSendMessage();
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onDeleteMessage = (messageId: number) => {
    setMessages(messages.filter((message) => message.id !== messageId));
  };

  const onReplyMessage = (message: IMessage) => {
    setReplyContent(`${message.userName}님에게 답장하기<br />
                    ${message.content}<br />
                    `);

    textAreaRef.current?.focus();
  };

  return {
    messages,
    content,
    onChangeMessage,
    onDeleteMessage,
    onKeyUp,
    onSendMessage,
    onReplyMessage,
    textAreaRef,
    messagesEndRef,
    replyContent,
  };
}
