import * as React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  border-radius: ${props => props.theme.shape.borderRadius}px;
  max-width: 700px;
`

export const CardContent = styled.div`
  padding: ${props => props.theme.spacing(2)};
`