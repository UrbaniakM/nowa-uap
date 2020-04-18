import * as React from 'react';
import { OutlinedCard, CardContent, Divider, Typography } from 'components/';
import styled from 'styled-components';

export interface NewsProps {
  title: React.ReactNode;
  className?: string;
}

const NewsCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`

const NewsTitle = styled.div`
  margin: ${props => props.theme.spacing(2, 0, 1)};
`

const NewsText = styled.div`
  margin: ${props => props.theme.spacing(2, 0)};
`

export const News: React.FC<NewsProps> = ({ children, className, title }) => {
  return (
    <OutlinedCard className={className}>
      <NewsCardContent>
        <NewsTitle>
          <Typography variant='header3'>
            {title}
          </Typography>
        </NewsTitle>
        <Divider />
        <NewsText>
          {children}
        </NewsText>
      </NewsCardContent>
    </OutlinedCard>
  )
}