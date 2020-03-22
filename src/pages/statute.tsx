import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

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

interface StatuteQuery {
  goalsYaml: {
    title: string;
    content: {
      item: string;
    }[]
  }
}

const StatutePage: React.FC = () => {
  const { goalsYaml: { title, content } } = useStaticQuery<StatuteQuery>(statuteQuery);

  return (
    <div>
      <div>{title}</div>
      {content.map((point, index) => (
        <div key={index}>
          - {point.item}
        </div>
      ))}
    </div>
  )
}

export default StatutePage;
