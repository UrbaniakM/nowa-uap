import * as React from 'react';
import styled from 'styled-components'
import { Link } from './components';
import { useRoutingQuery } from 'utils/useRoutingQuery';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${props => props.theme.spacing(3, 4)}
`

export const TopMenu: React.FC = () => {
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
