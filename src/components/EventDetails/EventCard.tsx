import * as React from 'react';
import { ElevatedCard } from 'components/';
import styled from 'styled-components';
import eventDetails from './event_details.jpeg';

const ImageEvent = styled.img`
  width: 100%;
  border-radius: ${props => props.theme.shape.borderRadius}px ${props => props.theme.shape.borderRadius}px 0 0;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  object-fit: cover;
  max-height: 394px;
`

export interface EventCardProps {
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ children, className }) => {
  return (
    <ElevatedCard className={className}>
      <ImageEvent src={eventDetails} />
      {children}
    </ElevatedCard>
  )
}

const StyledEventCard = styled(EventCard)`
  background-color: ${props => props.theme.colorPalette.divider};
`

export { StyledEventCard as EventCard };