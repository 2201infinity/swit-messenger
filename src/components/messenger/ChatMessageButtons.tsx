import { DeleteIcon, ReplyIcon } from "assets/icons";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface ChatMessageButtonsProps {
  onDelete: () => void;
  onReply: () => void;
}

function ChatMessageButtons({
  onDelete,
  onReply,
}: ChatMessageButtonsProps): ReactElement {
  return (
    <>
      <MessageButton>
        <DeleteIcon onClick={onDelete} />
      </MessageButton>
      <MessageButton>
        <ReplyIcon onClick={onReply} />
      </MessageButton>
    </>
  );
}

const MessageButton = styled.button`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
  svg {
    cursor: pointer;
  }
`;

export default ChatMessageButtons;
