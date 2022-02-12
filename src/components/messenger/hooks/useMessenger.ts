import { newline } from "utils/newline";
import { ENTRY_USER, KeyCode } from "utils/constants";
import React, { useEffect, useRef, useState } from "react";
import { IMessage } from "types/message";
import MockMessages from "utils/data.json";
import { getCurrentDate } from "utils/date";
import { useSelector } from "react-redux";
import { userSelecter } from "stores/user";

export default function useMessenger() {
  const initialReplyContent = {
    replyId: 0,
    content: "",
  };

  const [messages, setMessages] = useState<IMessage[]>(MockMessages.messages);
  const [content, setContent] = useState<string>("");
  const [replyContent, setReplyContent] = useState(initialReplyContent);

  const { userId, profileImage, userName } = useSelector(userSelecter);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

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
        content: newline(content),
        reply: replyContent.content,
      },
    ]);
    setContent("");
    setReplyContent(initialReplyContent);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current?.scrollHeight;
    }
  }, [messages]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key, shiftKey } = e;
    const { enter } = KeyCode;
    if (key === enter && !shiftKey) onSendMessage();
    if (shiftKey && key === enter) setContent((prev) => prev + "\n");
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { nativeEvent } = e;
    if (nativeEvent instanceof InputEvent) {
      if (nativeEvent.inputType === "insertLineBreak") return;
    }
    setContent(e.target.value);
  };

  const onDeleteMessage = (message: IMessage) => {
    setMessages(messages.filter((msg) => msg.id !== message.id));
    if (message.id === replyContent.replyId) {
      setReplyContent(initialReplyContent);
    }
  };

  const onReplyMessage = (message: IMessage) => {
    setReplyContent({
      replyId: message.id,
      content: `${message.userName}님에게 답장하기<br />
      ${message.content}<br />
      (회신)<br />
      `,
    });
    textAreaRef.current?.focus();
  };
  useEffect(() => {
    userId &&
      setMessages((prev) => [
        ...prev,
        {
          id: ENTRY_USER,
          userId: ENTRY_USER,
          userName: "",
          profileImage: "",
          date: getCurrentDate(),
          content: `${userName} 님이 입장하셨습니다.`,
        },
      ]);
  }, [userId, userName]);

  return {
    messages,
    content,
    onChangeMessage,
    onDeleteMessage,
    onKeyPress,
    onSendMessage,
    onReplyMessage,
    textAreaRef,
    messagesEndRef,
    replyContent,
  };
}
