import React, { ReactElement } from "react";
import styled, { css } from "styled-components";

interface MessageProps {
  myMessage?: boolean;
  children: React.ReactNode;
}

function Message({ myMessage = false, children }: MessageProps): ReactElement {
  return (
    <MessageContainer isMyMessage={myMessage}>{children}</MessageContainer>
  );
}

const MessageContainer = styled.div<{ isMyMessage: boolean }>`
  ${(props) =>
    props.isMyMessage
      ? css`
          background: ${({ theme }) => theme.colors.myChatBackground};
          color: ${({ theme }) => theme.colors.white};
          margin-right: 10px;
        `
      : css`
          background: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.black};
          margin-left: 10px;
        `}
  font-size: ${({ theme }) => theme.fontSize.text};
  padding: 12px 16px;
  border-radius: 6px;
  line-height: 1.5;
  max-width: 250px;
  margin-top: 5px;
`;

export default Message;
