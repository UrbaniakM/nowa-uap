import * as React from 'react';
import { PageTitle, Typography } from 'components/';
import styled from 'styled-components';

const Section = styled.div`
  margin: ${props => props.theme.spacing(1, 0)};
`

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageTitle>Kontakt</PageTitle>
      <Typography variant='header3'>Fundacja Nowa UAP</Typography>
      <Section>
        <Typography variant='body' color='textSecondary'>ul. Nazwa Ulicy XY</Typography>
        <Typography variant='body' color='textSecondary'>01-234 Poznań</Typography>
      </Section>
      <Section>
      <Typography variant='body'>NIP: 0000000000</Typography>
      <Typography variant='body'>REGON: 000000000</Typography>
      <Typography variant='body'>KRS: 0000000000</Typography>
      </Section>
      <Section>
      <Typography variant='body' color='textSecondary'>Fundacja nie prowadzi działalności gospodarczej i jest organizacją pożytku publicznego.</Typography>
      <Typography variant='body'>Nr konta: 00 0000 0000 0000 0000 0000 0000</Typography>
      </Section>
    </div>
  )
}

export default ContactPage;
