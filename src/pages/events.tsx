import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Event } from 'components/Event';
import { PageTitle, Typography } from 'components/';
import styled from 'styled-components';
import chunk from 'lodash/chunk';

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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const EventColumn = styled(Event)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

const EventsPage: React.FC = () => {
  const { eventsJson: { events } } = useStaticQuery<EventsQuery>(eventsQuery);

  const currentEvents = events.slice(0, 2);
  const pastEvents = events.slice(2);

  const eventsCurrentRows = chunk(currentEvents, 3)
  const eventsPastRows = chunk(pastEvents, 3);

  return (
    <div>
      <PageTitle>Aktualne wydarzenia</PageTitle>
      {eventsCurrentRows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((event, eventIndex) => (
            <Link to='/event_details'>
              <EventColumn key={`${rowIndex} ${eventIndex}`} date={event.date} name={event.name} />
            </Link>
          ))}
        </Row>
      ))}
      <PageTitle>Ubiegłe wydarzenia</PageTitle>
      {eventsPastRows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((event, eventIndex) => (
            <Link to='/event_details'>
              <EventColumn key={`${rowIndex} ${eventIndex}`} date={event.date} name={event.name} />
            </Link>
          ))}
        </Row>
      ))}
    </div>
  )
}

export default EventsPage;
