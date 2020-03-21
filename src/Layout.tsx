import * as React from "react"
import { Footer } from "./components/Footer"
import { TopMenu } from "./components/TopMenu";
import { createGlobalStyle } from "styled-components";

const GlobalCssStyles = createGlobalStyle`
  body {
    background-color: #E5E5E5;
    margin: 0;
    color: ${props => props.theme.colorPalette.textPrimary}
  }
`

const MainLayout: React.FC = ({ children }) => (
  <>
    <GlobalCssStyles />
    <div>
      <TopMenu />
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </>
)

export default MainLayout;
