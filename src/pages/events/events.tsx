import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
        <div key={index}>
          {event.date}
          {event.name}
        </div>
      ))}
    </div>
  )
}
