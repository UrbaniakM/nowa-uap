import * as React from 'react';
import styled from 'styled-components';
import { InterfacesLogo } from 'components/Logos/InterfacesLogo';
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from 'components/Icons';


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
  max-width: 1200px;
`

const FooterLogo = styled(InterfacesLogo)`
  height: 48px;
  fill: ${props => props.theme.colorPalette.whitePrimary};
  margin-left: auto;
`

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  color: white;
  & > svg {
    width: 32px;
    margin-right: ${props => props.theme.spacing(2)};
  }
`;

export const Footer: React.FC = () => {

  return (
    <FooterWrapper>
      <FooterContent>
        <SocialMediaIcons>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </SocialMediaIcons>
        <FooterLogo />
      </FooterContent>
    </FooterWrapper>
  )
}
