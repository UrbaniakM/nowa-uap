import * as React from 'react';
import { Card, CardContent } from 'components/';
import styled from 'styled-components';

export interface EventProps {
  name: string;
  date: string;
  className?: string;
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`

export const Event: React.FC<EventProps> = ({ name, date, className }) => {
  return (
    <Card className={className}>
      <CardContent>
        {date}
        {name}
      </CardContent>
    </Card>
  )
}
