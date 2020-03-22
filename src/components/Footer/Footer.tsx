import * as React from 'react';
import styled from 'styled-components';
import { useRoutingQuery } from 'utils/useRoutingQuery';
import { Link } from '@reach/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  margin-top: ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(4, 6)};
`

export const Footer: React.FC = () => {
  const pages = useRoutingQuery();

  return (
    <Wrapper>
      {pages.map(({ name, route }) => (
        <Link to={route}>
          {name}
        </Link>
      ))}
    </Wrapper>
  )
}
