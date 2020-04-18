import * as React from 'react';
import { useGoalsQuery } from 'utils/useGoalsQuery';
import { useMethodsQuery } from 'utils/useMethodsQuery';
import { Typography, PageTitle, ListItem } from 'components/';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing(4)};
  max-width: 700px;
`

const StyledListItem = styled(ListItem)`
  list-style-type: decimal;
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
        <ul>
          {contentGoals.map((point, index) => (
            <StyledListItem key={index}>
              {point.item}
            </StyledListItem>
          ))}
        </ul>
      </Section>
      <Section>
        <Typography variant='header3' textAlign='center'>§ 7</Typography>
        <Typography variant='header3' textAlign='center'>{titleMethods}</Typography>
        <ul>
          {contentMethods.map((point, index) => (
            <StyledListItem key={index}>
              {point.item}
            </StyledListItem>
          ))}
        </ul>
      </Section>
    </div>
  )
}

export default StatutePage;
