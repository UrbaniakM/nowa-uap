import * as React from 'react';
import styled from 'styled-components';
import { Typography } from 'components/';
import { EventIcon, RoomIcon, ScheduleIcon } from 'components/Icons';

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.spacing(1.5, 0)};
  & > * {
    margin-right: ${props => props.theme.spacing(2)};
  };
`;

const RowIcon = (Component: React.FC) => styled(Component)`
  width: 24px;
`
const StyledEventIcon = RowIcon(EventIcon);
const StyledRoomIcon = RowIcon(RoomIcon);
const StyledScheduleIcon = RowIcon(ScheduleIcon);

const EventInfoCardContent = styled.div`
  padding: ${props => props.theme.spacing(1, 4)};
`

export const EventInfo: React.FC = () => {
  return (
    <EventInfoCardContent>
      <Row>
        <StyledRoomIcon />
        <Typography variant='header3'>Miejsce:</Typography>
        <Typography variant='subtitle'>Aleje Marcinkowskiego 29, 60-967 Poznań</Typography>
      </Row>
      <Row>
        <StyledEventIcon />
        <Typography variant='header3'>Data:</Typography>
        <Typography variant='subtitle'>25.06.2020</Typography>
      </Row>
      <Row>
        <StyledScheduleIcon />
        <Typography variant='header3'>Godzina:</Typography>
        <Typography variant='subtitle'>17:30</Typography>
      </Row>
    </EventInfoCardContent>
  )
}