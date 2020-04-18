import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Event } from 'components/Event';
import { PageTitle } from 'components/';
import styled from 'styled-components';
import chunk from 'lodash/chunk';

export const eventsQuery = graphql`
  query EventsQuery {
    eventsJson {
      events {
        name
        text
        date
        imageUrl
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
      imageUrl: string;
    }[]
  }
}

const EventPageTitle = styled(PageTitle)`
  margin-bottom: ${props => props.theme.spacing(1)};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 394px;
  margin: ${props => props.theme.spacing(1, -1)};
`

const StyledEvent = styled(Event)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  max-width: calc(33% - ${props => props.theme.spacing(2)});
  min-width: 300px;
  margin: ${props => props.theme.spacing(1)};
  & > div {
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
      <EventPageTitle>Aktualne wydarzenia</EventPageTitle>
      {eventsCurrentRows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((event, eventIndex) => (
            <StyledEvent
              key={`${rowIndex}${eventIndex}`}
              date={event.date}
              text={event.text}
              name={event.name}
              imageUrl={event.imageUrl}
              href='/events/event_details'
            />
          ))}
        </Row>
      ))}
      <EventPageTitle>Ubiegłe wydarzenia</EventPageTitle>
      {eventsPastRows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((event, eventIndex) => (
            <StyledEvent
              key={`${rowIndex}${eventIndex}`}
              date={event.date}
              text={event.text}
              name={event.name}
              imageUrl={event.imageUrl}
              href='/events/event_details'
            />
          ))}
        </Row>
      ))}
    </div>
  )
}

export default EventsPage;
