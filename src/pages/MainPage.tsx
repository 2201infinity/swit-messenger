import Footer from "components/Footer";
import Header from "components/Header";
import MessengerContainer from "components/messenger/MessengerContainer";
import styled from "styled-components";
import { ChatRoom } from "components/ChatRoom";

function MainPage() {
  return (
    <MainContainer>
      <MainLayout>
        <Header />
        <Content>
          <MessengerContainer />
          <ChatRoom />
        </Content>
        <Footer />
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
  padding-top: 65px;
  background-color: #ffebee;
`;

export default MainPage;
