import * as React from 'react';
import { useGoalsQuery } from 'utils/useGoalsQuery';
import { useMethodsQuery } from 'utils/useMethodsQuery';
import { Typography } from 'components/';

const StatutePage: React.FC = () => {
  const { title: titleGoals, content: contentGoals } = useGoalsQuery();
  const { title: titleMethods, content: contentMethods } = useMethodsQuery();

  return (
    <div>
      <Typography variant='header1'>Cele i zasady działania Fundacji:</Typography>
      <Typography variant='header3' textAlign='center'>§ 6</Typography>
      <Typography variant='header3' textAlign='center'>{titleGoals}</Typography>
      {contentGoals.map((point, index) => (
        <Typography variant='body' key={index}>
          {`${index}. ${point.item}`}
        </Typography>
      ))}
      <Typography variant='header3' textAlign='center'>§ 7</Typography>
      <Typography variant='header3' textAlign='center'>{titleMethods}</Typography>
      {contentMethods.map((point, index) => (
        <Typography variant='body' key={index}>
          {`${index}. ${point.item}`}
        </Typography>
      ))}
    </div>
  )
}

export default StatutePage;
