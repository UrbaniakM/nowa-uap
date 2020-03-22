import * as React from 'react';

export interface EventProps {
  name: string;
  date: string;
  className?: string;
}

export const Event: React.FC<EventProps> = ({ name, date, className }) => {
  return (
    <div className={className}>
      {date}
      {name}
    </div>
  )
}
