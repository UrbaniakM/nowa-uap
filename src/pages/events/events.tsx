import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Event } from './components';

export const eventsQuery = graphql`
  query EventsQuery {
    eventsJson {
      events {
        name
        date
      }
    }
  }
`

interface EventsQuery {
  eventsJson: {
    events: {
      name: string;
      date: string;
    }[]
  }
}

export const EventsPage: React.FC = () => {
  const { eventsJson: { events } } = useStaticQuery<EventsQuery>(eventsQuery);

  return (
    <div>
      <div>Wydarzenia - aktualne i przeszłe</div>
      {events.map((event, index) => (
        <Event key={index} date={event.date} name={event.name}/>
      ))}
    </div>
  )
}
