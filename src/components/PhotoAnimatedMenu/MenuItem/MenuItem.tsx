import * as React from 'react';
import styled from 'styled-components';
import { MenuText } from './MenuText';
import { MenuIcon } from './MenuIcon';

const Row = styled.div`
  display: flex;
  background-color: ${props => props.theme.colorPalette.textSecondary};
  border-radius: 40px;
  align-items: center;
  margin: ${props => props.theme.spacing(0, 1)};
  & > :first-child {
    margin-left: ${props => props.theme.spacing(1)};
  }
  & > :nth-child(2) {
    margin-right: ${props => props.theme.spacing(4)};
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