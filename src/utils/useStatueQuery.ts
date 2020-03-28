import { graphql, useStaticQuery } from "gatsby";

export const statuteQuery = graphql`
  query GoalsQuery {
    goalsYaml {
      title
      content {
        item
      }
    }
  }
`

export interface StatuteQuery {
  goalsYaml: {
    title: string;
    content: {
      item: string;
    }[]
  }
}

export const useStatueQuery = () => {
  const { goalsYaml } = useStaticQuery<StatuteQuery>(statuteQuery);


  return goalsYaml;
}
