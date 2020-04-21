import * as React from 'react';

import { PhotoUAP } from './PhotoUAP';
import { MenuItem } from './MenuItem';
import { DonateAnimatedIcon, EventsAnimatedIcon, ContactAnimatedIcon } from './Icons';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing(5, 0)};
`

const Menu = styled.div`
  position: absolute;
  width: 800px;
  top: calc(50% - 120px);
  left: calc(50% - 400px);
`

export const PhotoAnimatedMenu: React.FC = () => {
  return (
    <PhotoUAP>
      <Menu>
        <Row>
          <MenuItem icon={<div />}>
            Zapoznaj się ze statutem organizacji
          </MenuItem>
          <MenuItem icon={<DonateAnimatedIcon />}>
            Wesprzyj naszą działalność
        </MenuItem>
        </Row>
        <Row>
          <MenuItem icon={<EventsAnimatedIcon />}>
            Weź udział w wydarzeniach fundacji
          </MenuItem>
          <MenuItem icon={<ContactAnimatedIcon />}>
            Skontaktuj się z nami
          </MenuItem>
        </Row>
      </Menu>
    </PhotoUAP>
  )
}