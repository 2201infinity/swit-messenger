import styled from "styled-components";

function Footer() {
  return <FooterContainer>this is footer</FooterContainer>;
}

export default Footer;

const FooterContainer = styled.div`
  height: 60px;
  width: 420px;
  position: fixed;
  bottom: 0;
  text-align: center;
  background-color: #ff1744;
`;
