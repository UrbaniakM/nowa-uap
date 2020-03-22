import * as React from 'react';

export interface EventProps {
  name: string;
  date: string;
}

export const Event: React.FC<EventProps> = ({ name, date }) => {
  return (
    <div>
      {date}
      {name}
    </div>
  )
}
