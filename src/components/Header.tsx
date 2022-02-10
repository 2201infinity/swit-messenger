import styled from "styled-components";

function Header() {
  return <HeaderContainer>this is header</HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.div`
  width: 420px;
  height: 65px;
  position: fixed;
  background-color: #ff1744;
  text-align: center;
`;
