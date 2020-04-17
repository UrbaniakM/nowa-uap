import * as React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  border-radius: ${props => props.theme.shape.borderRadius}px;
  background-color: rgba(0, 0, 0, 0.12);
  max-width: 700px;
`

export const CardContent = styled.div`
  padding: ${props => props.theme.spacing(4)};
`