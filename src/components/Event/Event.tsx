import * as React from 'react';
import { OutlinedCard, CardContent, Divider, Typography } from 'components/';
import styled from 'styled-components';
import { Link } from 'gatsby';

export interface EventProps {
  name: string;
  text: string;
  date: string;
  href: string;
  imageUrl: string;
  className?: string;
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const StyledDivider = styled(Divider)`
  margin: ${props => props.theme.spacing(2, 0)};
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CardContentFooter = styled.div`
  margin-top: auto;
  margin-bottom: ${props => props.theme.spacing(1)};
`;

const EventImg = styled.img`
  max-width: 100%;
  max-height: 190px;
  object-fit: cover;
  border-radius: ${props => props.theme.shape.borderRadius}px ${props => props.theme.shape.borderRadius}px 0 0;
`

export const Event: React.FC<EventProps> = ({ name, date, text, href, imageUrl, className }) => {
  return (
    <OutlinedCard className={className}>
      <EventImg src={imageUrl} />
      <StyledCardContent>
        <Typography variant='subtitle'>
          {name}
        </Typography>
        <Typography variant='body' color='textSecondary'>
          {text}
        </Typography>
        <CardContentFooter>
          <StyledDivider />
          <Row>
            <Typography variant='caption' color='textSecondary'>
              {date}
            </Typography>
            <Link to={href}>
              <Typography variant='button'>
                Przeczytaj więcej
            </Typography>
            </Link>
          </Row>
        </CardContentFooter>
      </StyledCardContent>
    </OutlinedCard>
  )
}
