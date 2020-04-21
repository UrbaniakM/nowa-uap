import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing(4)};
`

const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 768px;
  filter: brightness(0.4);
`

export const PhotoUAP: React.FC = ({ children }) => {
  return (
    <Container>
      <Photo src='/uap_photo/UAP_Photo_1.png' />
      {children}
    </Container>
  )
}