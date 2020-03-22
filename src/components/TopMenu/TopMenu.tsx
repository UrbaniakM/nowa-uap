import * as React from 'react';
import styled from 'styled-components'
import { Link } from './components';
import { BlackNowaLogo } from 'components/Logos/BlackNowaLogo';
import { useRoutingQuery } from 'utils/useRoutingQuery';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${props => props.theme.spacing(3, 4)};
  max-width: 1200px;
  & > :first-child {
    margin-right: auto;
  }
`
const NowaLogo = styled(BlackNowaLogo)`
  height: 60px;
`

export const TopMenu: React.FC = () => {
  const pages = useRoutingQuery();

  return (
    <Wrapper>
      <Link to='/'>
        <NowaLogo />
      </Link>
      {pages.map(({ name, route }) => (
        <Link to={route}>
          {name}
        </Link>
      ))}
    </Wrapper>
  )
}
