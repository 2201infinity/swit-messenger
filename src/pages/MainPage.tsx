import styled from "styled-components";
import { ChatRoom } from "components/messenger/ChatRoom";

function MainPage() {
  return (
    <MainContainer>
      <MainLayout>
        <Content>
          <ChatRoom />
        </Content>
      </MainLayout>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const MainLayout = styled.div`
  width: 420px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 10%);
`;

const Content = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightRed};
  display: flex;
  flex-direction: column;
`;

export default MainPage;
