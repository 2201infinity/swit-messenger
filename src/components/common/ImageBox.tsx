import React from "react";
import styled from "styled-components";
import { IMessage } from "types/message";

function ImageBox() {
  return (
    <Container>
      <img src="https://i.ibb.co/LNw3QCV/image.png" alt="profileImage" />
    </Container>
  );
}

export default ImageBox;

const Container = styled.div`
  width: 42px;
  height: 42px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;
