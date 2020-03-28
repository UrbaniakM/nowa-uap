import * as React from 'react';
import { useStatueQuery } from 'utils/useStatueQuery';

const StatutePage: React.FC = () => {
  const { title: titleGoals, content: contentGoals } = useStatueQuery();

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
    </div>
  )
}

export default StatutePage;
