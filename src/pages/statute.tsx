import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

export const statuteQuery = graphql`
  query GoalsQuery {
    dataYaml {
      title
      content {
        item
      }
    }
  }
`

interface StatuteQuery {
  dataYaml: {
    title: string;
    content: {
      item: string;
    }[]
  }
}

const StatutePage: React.FC = () => {
  const { dataYaml: { title, content } } = useStaticQuery<StatuteQuery>(statuteQuery);
  console.log(title, content);

  return (
    <div>
      <div>{title}</div>
      {content.map(point => (
        <div>
          - {point.item}
        </div>
      ))}
    </div>
  )
}

export default StatutePage;
