import styled, { css } from 'styled-components';

interface IMyMessageProps {
  myMessage?: boolean;
  children: React.ReactNode;
}

export const Message = ({ myMessage = false, children }: IMyMessageProps) => {
  return (
    <MessageContainer isMyMessage={myMessage}>{children}</MessageContainer>
  );
};

const MessageContainer = styled.div<{ isMyMessage: boolean }>`
  ${(props) =>
    props.isMyMessage
      ? css`
          background: ${({ theme }) => theme.colors.myChatBackground};
          color: ${({ theme }) => theme.colors.white};
          margin-right: 10px;
        `
      : css`
          background: ${({ theme }) => theme.colors.othersChatBackground};
          color: ${({ theme }) => theme.colors.black};
          margin-left: 10px;
        `}
  font-size: ${({ theme }) => theme.fontSize.text};
  padding: 17px 20px;
  border-radius: 6px;
  line-height: 1.5;
  max-width: 280px;
`;
