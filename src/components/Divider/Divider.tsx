import * as React from 'react';
import styled from 'styled-components';

export const BaseDivider = styled.div`
  height: 1px;
  margin: 0;
  border: none;
  flexShrink: 0;
  background-color: ${props => props.theme.colorPalette.textSecondary};
`

export const MiddleDivider = styled(BaseDivider)`
  margin-left: ${props => props.theme.spacing(2)};
  margin-right: ${props => props.theme.spacing(2)};
`

export const Divider = BaseDivider;
