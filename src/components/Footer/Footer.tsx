import * as React from 'react';
import styled from 'styled-components';
import { InterfacesLogo } from 'components/Logos/InterfacesLogo';


const FooterWrapper = styled.div`
  background-color: ${props => props.theme.colorPalette.textPrimary};
  margin-top: auto;
`

const FooterContent = styled.div`
  color: ${props => props.theme.colorPalette.whitePrimary};
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing(4, 6)};
  min-height: 100px;
  justify-content: flex-end;
`

const FooterLogo = styled(InterfacesLogo)`
  height: 48px;
  fill: ${props => props.theme.colorPalette.whitePrimary};
  margin-left: auto;
`

export const Footer: React.FC = () => {

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo />
      </FooterContent>
    </FooterWrapper>
  )
}
