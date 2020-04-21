import * as React from 'react';
import styled from 'styled-components';
import { MenuText } from './MenuText';
import { MenuIcon } from './MenuIcon';

const Row = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    margin: ${props => props.theme.spacing(0, 3)};
  }
`

export interface MenuItemProps {
  icon: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, icon }) => {
  return (
    <Row>
      <MenuIcon>
        {icon}
      </MenuIcon>
      <MenuText>
        {children}
      </MenuText>
    </Row>
  )
}