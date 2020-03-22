import * as React from 'react';
import styled from 'styled-components';
import { useRoutingQuery } from 'utils/useRoutingQuery';
import { Link } from '@reach/router';


const FooterWrapper = styled.div`
  background-color: grey;
  margin-top: ${props => props.theme.spacing(6)};
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing(4, 6)};
`

export const Footer: React.FC = () => {
  const pages = useRoutingQuery();

  return (
    <FooterWrapper>
      <FooterContent>
        {pages.map(({ name, route }) => (
          <Link to={route}>
            {name}
          </Link>
        ))}
      </FooterContent>
    </FooterWrapper>
  )
}
