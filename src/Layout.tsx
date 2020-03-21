import * as React from "react"
import { Footer } from "./components/Footer"
import { TopMenu } from "./components/TopMenu";

const MainLayout: React.FC = ({ children }) => (
    <div>
      <TopMenu />
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
)

export default MainLayout
