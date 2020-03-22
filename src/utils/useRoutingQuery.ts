import { graphql, useStaticQuery } from "gatsby";

export const routingQuery = graphql`
  query SiteRoutingQuery {
    site {
      siteMetadata {
        pages {
          name
          route
        }
      }
    }
  }
`

export interface RoutingQuery {
  site: {
    siteMetadata: {
      pages: {
        name: string;
        route: string;
      }[]
    }
  }
}

export const useRoutingQuery = () => {
  const { site: { siteMetadata: { pages } }} = useStaticQuery<RoutingQuery>(routingQuery);

  return pages;
}
