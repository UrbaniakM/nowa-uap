import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { siteName } = data.site.siteMetadata

  return (
    <Layout>
      <p>This site is named <strong>{siteName}</strong></p>
    </Layout>
  );
}

export default IndexPage;
