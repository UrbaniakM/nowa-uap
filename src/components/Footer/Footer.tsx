import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  margin-top: ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(4, 6)};
`

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
    </Wrapper>
  )
}
