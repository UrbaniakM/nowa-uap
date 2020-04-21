import * as React from 'react';
import styled from 'styled-components';
import { Circle } from 'components/PhotoAnimatedMenu/Icons';

const MenuIconRoot = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colorPalette.whitePrimary};
`;

const MenuIconContainer = styled.div`
  width: 40px;
  height: 40px;
`;

export const MenuIcon: React.FC = ({ children }) => {
  return (
    <MenuIconRoot>
      <MenuIconContainer>
        {children}
      </MenuIconContainer>
    </MenuIconRoot>
  )
}