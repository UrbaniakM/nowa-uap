import * as React from 'react';
import { Card } from 'components/';
import styled from 'styled-components';
import eventDetails from './event_details.jpeg';

const ImageEvent = styled.img`
  width: 100%;
  border-radius: ${props => props.theme.shape.borderRadius}px ${props => props.theme.shape.borderRadius}px 0 0;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
`

export interface EventCardProps {
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ children, className }) => {
  return (
    <Card className={className}>
      <ImageEvent src={eventDetails} />
      {children}
    </Card>
  )
}

const StyledEventCard = styled(EventCard)`
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.4);
`

export { StyledEventCard as EventCard };