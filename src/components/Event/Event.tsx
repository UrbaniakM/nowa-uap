import * as React from 'react';
import { Card, CardContent, Divider, Typography } from 'components/';
import styled from 'styled-components';
import { Link } from 'gatsby';

export interface EventProps {
  name: string;
  text: string;
  date: string;
  href: string;
  className?: string;
}

const StyledCard = styled(Card)`
  border: 1px solid ${props => props.theme.colorPalette.divider};
`

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

export const Event: React.FC<EventProps> = ({ name, date, text, href, className }) => {
  return (
    <StyledCard className={className}>
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
    </StyledCard>
  )
}
