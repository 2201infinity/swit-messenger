import React, { ReactElement } from "react";
import styled from "styled-components";
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
  const isElipsis = content.length > 10;

  return (
    <ModalTemplate
      width={328}
      height={90}
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      <DeleteModalInner>
        {content.substring(0, 10)}
        {isElipsis && "..."} 메세지를 삭제하시겠습니까?
        <div>
          <button onClick={onClick}>삭제</button>
          <button onClick={onToggleModal}>취소</button>
        </div>
      </DeleteModalInner>
    </ModalTemplate>
  );
}

const DeleteModalInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

export default MessageDeleteModal;
