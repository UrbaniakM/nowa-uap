import * as React from 'react';
import { PageTitle, News } from 'components/';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin: ${props => props.theme.spacing(0, -1.5)};
  & > * {
    margin: ${props => props.theme.spacing(0, 1.5)};
    min-height: 220px;
  }
`

const HomePage: React.FC = () => {
  return (
    <div>
      <PageTitle>Aktualności</PageTitle>
      <Row>
        <News title='Studenci i ich nowa hala'>
          Vivamus sollicitudin vestibulum mauris, et fringilla urna elementum in.
          Curabitur mattis libero sit amet lorem sagittis cursus.
          Phasellus consequat velit vitae mollis auctor.
      </News>
        <News title='Wciąż trwa zbiórka'>
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Vivamus ac lectus rutrum, commodo orci id, sodales lorem.
          Etiam faucibus venenatis nisl, vel dictum sem semper vitae.
      </News>
        <News title='Zrealizowaliśmy cele na 2020 rok'>
          Duis in tristique erat.
          Phasellus vel commodo massa.
          Cras metus nisi, posuere nec egestas ac, aliquet vel libero.
          Fusce cursus at ex id dignissim.
          Suspendisse in elit eros.
      </News>
      </Row>
    </div>
  )
}
export default HomePage;
