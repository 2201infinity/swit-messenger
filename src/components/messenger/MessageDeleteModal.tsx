import React, { ReactElement } from "react";
import ModalTemplate from "../common/ModalTemplate";

interface MessageDeleteModalProps {
  isModal: boolean;
  onToggleModal: () => void;
  content: string;
  onClick: () => void;
}

function MessageDeleteModal({
  isModal,
  onToggleModal,
  content,
  onClick,
}: MessageDeleteModalProps): ReactElement {
  return (
    <ModalTemplate
      width={328}
      height={178}
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      {content}
      <button onClick={onClick}>확인</button>
    </ModalTemplate>
  );
}

export default MessageDeleteModal;
