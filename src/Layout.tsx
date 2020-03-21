import * as React from "react"
import { Footer } from "./components/Footer"

const MainLayout: React.FC = ({ children }) => (
    <div>
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
)

export default MainLayout
