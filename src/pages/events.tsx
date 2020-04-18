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
        text
        date
      }
    }
  }
`

interface EventsQuery {
  eventsJson: {
    events: {
      name: string;
      text: string;
      date: string;
    }[]
  }
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 394px;
  margin: ${props => props.theme.spacing(-1)};
`

const StyledEvent = styled(Event)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  max-width: calc(33% - ${props => props.theme.spacing(2)});
  margin: ${props => props.theme.spacing(1)};
  & > * {
    height: 100%;
  }
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
            <StyledEvent key={`${rowIndex} ${eventIndex}`} date={event.date} text={event.text} name={event.name} href='/event_details' />))}
        </Row>
      ))}
      <PageTitle>Ubiegłe wydarzenia</PageTitle>
      {eventsPastRows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((event, eventIndex) => (
            <StyledEvent key={`${rowIndex} ${eventIndex}`} date={event.date} text={event.text} name={event.name} href='/event_details' />
          ))}
        </Row>
      ))}
    </div>
  )
}

export default EventsPage;
