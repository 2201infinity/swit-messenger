import styled from "styled-components";
import MessageInput from "./MessageInput";

function Footer() {
  return (
    <FooterContainer>
      <MessageInput></MessageInput>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  height: 65px;
  width: 420px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff1744;
`;
