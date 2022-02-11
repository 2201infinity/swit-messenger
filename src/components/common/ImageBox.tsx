import React from 'react';
import styled from 'styled-components';

interface IImageSrcProps {
  imageSrc: string;
}
function ImageBox({ imageSrc }: IImageSrcProps) {
  return (
    <Container>
      <img src={imageSrc} alt="profileImage" />
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
