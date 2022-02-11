import { Teamlogo } from "assets/images";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <img src={Teamlogo} alt="team-profile" />
      <p>8팀 인피니티 회의실</p>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  width: 420px;
  height: 64px;
  position: fixed;
  background: linear-gradient(
    90deg,
    rgba(255, 100, 114, 1) 25%,
    rgba(255, 23, 68, 1) 85%
  );
  box-shadow: 1px 3px 5px 0px rgba(255, 80, 95, 0.7);
  -webkit-box-shadow: 1px 3px 5px 0px rgba(255, 80, 95, 0.7);
  -moz-box-shadow: 1px 3px 5px 0px rgba(255, 80, 95, 0.7);

  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.white};

  img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;
