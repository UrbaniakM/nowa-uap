import * as React from "react"
import { Footer } from "./components/Footer"
import { TopMenu } from "./components/TopMenu";
import styled, { createGlobalStyle } from "styled-components";

const GlobalCssStyles = createGlobalStyle`
  body {
    background-color: #E5E5E5;
    margin: 0;
    color: ${props => props.theme.colorPalette.textPrimary};
    font-family: 'Source Sans Pro', sans-serif;
  }
`

const AppWrapper = styled.div`
  max-width: 1200px;
  justify-content: center;
  margin: auto;
`

const AppContent = styled.div`
  margin: ${props => props.theme.spacing(0, 4)}
`

const MainLayout: React.FC = ({ children }) => (
  <>
    <GlobalCssStyles />
    <AppWrapper>
      <TopMenu />
      <AppContent>
        {children}
      </AppContent>
      <Footer />
    </AppWrapper>
  </>
)

export default MainLayout;
