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

const MainLayout: React.FC = ({ children }) => (
  <>
    <GlobalCssStyles />
    <AppWrapper>
      <TopMenu />
      <div>
        {children}
      </div>
      <Footer />
    </AppWrapper>
  </>
)

export default MainLayout;
