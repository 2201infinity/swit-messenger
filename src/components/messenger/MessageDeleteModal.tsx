import { Button } from "components/common/Button";
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
      height={100}
      isModal={isModal}
      onToggleModal={onToggleModal}
    >
      <DeleteModalInner>
        <ModalText>
          {content.replace("<br />", "").substring(0, 10)}
          <StrongText>
            {isElipsis && "..."} 메세지를 삭제하시겠습니까?
          </StrongText>
        </ModalText>
        <ModalButtonGroups>
          <Button
            width="70px"
            height="30px"
            variant="primary"
            onClick={onClick}
          >
            삭제
          </Button>
          <Button
            width="70px"
            height="30px"
            variant="secondary"
            onClick={onToggleModal}
          >
            취소
          </Button>
        </ModalButtonGroups>
      </DeleteModalInner>
    </ModalTemplate>
  );
}

const DeleteModalInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.text};
`;

const ModalText = styled.span`
  display: flex;
  flex: 1 auto;
  align-items: center;
  justify-content: center;
`;

const StrongText = styled.span`
  font-weight: bold;
`;

const ModalButtonGroups = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin-right: 10px;
  }
`;

export default MessageDeleteModal;
