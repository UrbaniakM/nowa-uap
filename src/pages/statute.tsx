import * as React from 'react';
import { useGoalsQuery } from 'utils/useGoalsQuery';
import { useMethodsQuery } from 'utils/useMethodsQuery';

const StatutePage: React.FC = () => {
  const { title: titleGoals, content: contentGoals } = useGoalsQuery();
  const { title: titleMethods, content: contentMethods } = useMethodsQuery();

  return (
    <div>
      <div>Cele i zasady działania Fundacji:</div>
      <div>§ 6</div>
      <div>{titleGoals}</div>
      {contentGoals.map((point, index) => (
        <div key={index}>
          - {point.item}
        </div>
      ))}
      <div>§ 7</div>
      <div>{titleMethods}</div>
      {contentMethods.map((point, index) => (
        <div key={index}>
          - {point.item}
        </div>
      ))}
    </div>
  )
}

export default StatutePage;
