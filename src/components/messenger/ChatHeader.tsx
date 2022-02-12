import { Teamlogo } from "assets/images";
import styled from "styled-components";
import { BackIcon } from "assets/icons";
import { useNavigate } from "react-router-dom";
import { Path } from "utils/constants";
import { ReactElement } from "react";

function ChatHeader(): ReactElement {
  const navigate = useNavigate();
  const onBacktoLogin = () => navigate(Path.Home);

  return (
    <HeaderContainer>
      <StyledIcon onClick={onBacktoLogin} />
      <ChatRoomName>
        <img src={Teamlogo} alt="team-profile" />
        <p>인피니티 회의실</p>
      </ChatRoomName>
    </HeaderContainer>
  );
}

export default ChatHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding: 0 40px;
  width: 100%;
  padding-left: 13px;
  height: 64px;
  min-height: 64px;
  background: linear-gradient(
    90deg,
    rgba(255, 100, 114, 1) 25%,
    rgba(255, 23, 68, 1) 85%
  );
  box-shadow: 1px 3px 5px 0px rgba(255, 80, 95, 0.7);
  -webkit-box-shadow: 1px 3px 5px 0px rgba(255, 80, 95, 0.7);
  -moz-box-shadow: 1px 3px 5px 0px rgba(255, 80, 95, 0.7);
  text-align: center;
`;

const ChatRoomName = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  width: calc(100% - 30px);
  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`;

const StyledIcon = styled(BackIcon)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
