import styled from 'styled-components';
import ImageBox from './common/ImageBox';
import { Message } from './Message';
import datas from '../utils/data.json';
import { IMessage } from 'types/message';
// import { useSelector } from 'react-redux';
// import { userSelecter } from 'stores/user';

export const ChatRoom = () => {
  // const user = useSelector(userSelecter);

  return (
    <ChatRoomBox>
      {datas.messages.map((message: IMessage) => {
        const { userName, profileImage, date, content } = message;
        return (
          <div key={`${userName}_${content}`}>
            {/* userName === user */}
            <MessageBox isMyMessage={false}>
              <ImageBox imageSrc={profileImage} />
              <Message myMessage={false}>{content}</Message>
              <span>{date}</span>
            </MessageBox>
          </div>
        );
      })}
      {/* sample */}
      <div>
        <MessageBox isMyMessage={true}>
          <ImageBox imageSrc="https://i.ibb.co/LNw3QCV/image.png" />
          <Message myMessage={true}>
            안녕하세요 반갑습니다. 도현입니다. 잘부탁드립니다.
          </Message>
          <span>2022-02-10 09:20:35</span>
        </MessageBox>
      </div>
    </ChatRoomBox>
  );
};

const ChatRoomBox = styled.div`
  background-color: transparent;
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
`;

const MessageBox = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMyMessage ? 'row-reverse' : 'row')};
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  span {
    width: ${(props) => (props.isMyMessage ? 'auto' : '100%')};
    font-size: ${({ theme }) => theme.fontSize.smallText};
    color: ${({ theme }) => theme.colors.gray};
    margin-top: 10px;
  }
`;
