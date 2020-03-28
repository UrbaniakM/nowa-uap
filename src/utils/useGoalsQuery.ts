import { graphql, useStaticQuery } from "gatsby";

export const goalsQuery = graphql`
  query GoalsQuery {
    goalsYaml {
      title
      content {
        item
      }
    }
  }
`

export interface GoalsQuery {
  goalsYaml: {
    title: string;
    content: {
      item: string;
    }[]
  }
}

export const useGoalsQuery = () => {
  const { goalsYaml } = useStaticQuery<GoalsQuery>(goalsQuery);


  return goalsYaml;
}
