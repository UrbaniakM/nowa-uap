import * as React from 'react';
import styled from 'styled-components';
import { Circle } from 'components/PhotoAnimatedMenu/Icons';

const MenuIconRoot = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  color: ${props => props.theme.colorPalette.whitePrimary};
`;

const MenuIconContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
`;

export const MenuIcon: React.FC = ({ children }) => {
  return (
    <MenuIconRoot>
      <Circle />
      <MenuIconContainer>
        {children}
      </MenuIconContainer>
    </MenuIconRoot>
  )
}