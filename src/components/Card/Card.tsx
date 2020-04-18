import * as React from 'react';
import styled from 'styled-components';

export const BaseCard = styled.div`
  border-radius: ${props => props.theme.shape.borderRadius}px;
  max-width: 700px;
`

export const OutlinedCard = styled(BaseCard)`
  border: 1px solid ${props => props.theme.colorPalette.divider};
`

export const ElevatedCard = styled(BaseCard)`
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.4);
`

export const Card = OutlinedCard;

export const CardContent = styled.div`
  padding: ${props => props.theme.spacing(1, 2)};
`