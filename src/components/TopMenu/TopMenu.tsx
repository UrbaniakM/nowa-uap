import * as React from 'react';
import styled from 'styled-components'
import { Link } from './components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${props => props.theme.spacing(2, 4)}
`

export const TopMenu: React.FC = () => {
  return (
    <Wrapper>
      <Link to={'/'}>Strona główna</Link>
      <Link to={'/events'}>Wydarzenia</Link>
      <Link to={'/statute'}>Status</Link>
      <Link to={'/contact'}>Kontakt</Link>
    </Wrapper>
  )
}
