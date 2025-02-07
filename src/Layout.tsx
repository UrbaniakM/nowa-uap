import * as React from "react"
import styled, { createGlobalStyle } from "styled-components";
import { Footer, TopMenu } from "components/";

const GlobalCssStyles = createGlobalStyle`
  body {
    margin: 0;
    color: ${props => props.theme.colorPalette.textPrimary};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
  @font-face {
    font-family: "Logo Font";
    src: url("/fonts/logo-font.woff");
    format("woff");
  }
`

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  & > * {
    width: 100%;
  }
`

const AppContent = styled.div`
  margin: ${props => props.theme.spacing(0, 6, 8)};
  min-height: 500px;
`

const AppContentWrapper = styled.div`
  max-width: 1200px;
`

const MainLayout: React.FC = ({ children }) => (
  <>
    <GlobalCssStyles />
    <AppWrapper>
      <TopMenu />
      <AppContentWrapper>
        <AppContent>
          {children}
        </AppContent>
      </AppContentWrapper>
      <Footer />
    </AppWrapper>
  </>
)

export default MainLayout;
