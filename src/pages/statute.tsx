import * as React from 'react';
import { useGoalsQuery } from 'utils/useGoalsQuery';
import { useMethodsQuery } from 'utils/useMethodsQuery';
import { Typography, PageTitle } from 'components/';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing(4)};
`

const StatutePage: React.FC = () => {
  const { title: titleGoals, content: contentGoals } = useGoalsQuery();
  const { title: titleMethods, content: contentMethods } = useMethodsQuery();

  return (
    <div>
      <PageTitle>Cele i zasady działania Fundacji:</PageTitle>
      <Section>
        <Typography variant='header3' textAlign='center'>§ 6</Typography>
        <Typography variant='header3' textAlign='center'>{titleGoals}</Typography>
        {contentGoals.map((point, index) => (
          <Typography variant='body' key={index}>
            {`${index + 1}. ${point.item}`}
          </Typography>
        ))}
      </Section>
      <Section>
        <Typography variant='header3' textAlign='center'>§ 7</Typography>
        <Typography variant='header3' textAlign='center'>{titleMethods}</Typography>
        {contentMethods.map((point, index) => (
          <Typography variant='body' key={index}>
            {`${index + 1}. ${point.item}`}
          </Typography>
        ))}
      </Section>
    </div>
  )
}

export default StatutePage;
