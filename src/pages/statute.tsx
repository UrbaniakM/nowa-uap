import * as React from 'react';
import { useGoalsQuery } from 'utils/useGoalsQuery';
import { useMethodsQuery } from 'utils/useMethodsQuery';
import { Typography, PageTitle, ListItem } from 'components/';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: ${props => props.theme.spacing(4)};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const StyledListItem = styled(ListItem)`
  list-style-type: decimal;
`

const SectionHeader = styled.div`
  background-color: ${props => props.theme.colorPalette.textPrimary};
  border-radius: ${props => props.theme.shape.borderRadius}px;
  padding: ${props => props.theme.spacing(0.5, 0)};
`;

const StatutePage: React.FC = () => {
  const { title: titleGoals, content: contentGoals } = useGoalsQuery();
  const { title: titleMethods, content: contentMethods } = useMethodsQuery();

  return (
    <div>
      <PageTitle>Cele i zasady działania Fundacji:</PageTitle>
      <Section>
        <SectionHeader>
          <Typography variant='header2' textAlign='center' color='whitePrimary'>§ 6</Typography>
          <Typography variant='header3' textAlign='center' color='whitePrimary'>{titleGoals}</Typography>
        </SectionHeader>
        <ul>
          {contentGoals.map((point, index) => (
            <StyledListItem key={index}>
              {point.item}
            </StyledListItem>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionHeader>
          <Typography variant='header2' textAlign='center' color='whitePrimary'>§ 7</Typography>
          <Typography variant='header3' textAlign='center' color='whitePrimary'>{titleMethods}</Typography>
        </SectionHeader>
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
