import * as React from 'react';
import { PageTitle, Typography, EventCard, EventInfo } from 'components/';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: ${props => props.theme.spacing(4)};
`

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageTitle>Phasellus mattis blandit lacinia</PageTitle>
      <EventCard>
        <EventInfo />
      </EventCard>
      <Section>
        Integer lacinia suscipit neque, egestas lobortis magna gravida ac. Donec varius tellus id arcu rutrum convallis. Morbi pellentesque sem id diam porttitor, vitae iaculis massa mollis. Donec aliquam neque a cursus laoreet. Nullam fringilla massa odio, vitae interdum tellus accumsan non. Donec porta sit amet est id tempor. Pellentesque in aliquet turpis, dignissim pharetra turpis. Etiam sollicitudin velit justo, nec ultricies magna porttitor eget. Sed eget tellus aliquet, aliquet ligula quis, aliquam nisl. Mauris efficitur lectus ut nisl varius ultricies. Fusce molestie augue ut massa placerat malesuada. Vestibulum a semper arcu. Vivamus sagittis, erat eget tempor dignissim, urna magna blandit nisi, non luctus sem turpis eu lacus.
        </Section>
      <Section>
        "Donec tellus sapien, ultrices eu enim quis, maximus ultrices felis. Nunc pellentesque dignissim tristique. Etiam ornare, leo vitae placerat varius, ligula erat placerat mauris, id euismod nunc dolor a ipsum. Nunc et volutpat nibh. Integer dui erat, tempus quis tellus at, porttitor venenatis est. In at pharetra lacus, eget dictum sapien. Sed porta tincidunt eros. Duis blandit urna eu lacus pellentesque, nec vulputate ligula sollicitudin. Aliquam congue felis lorem, vitae facilisis nulla facilisis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sed nisl lacus. Aliquam erat volutpat."
      </Section>
      <Section>
      Proin eget nibh eget augue pharetra mattis. Integer ullamcorper, nisl et tempor mattis, lorem odio maximus lorem, tempor fringilla libero dolor at sapien. Sed enim diam, scelerisque et libero nec, mattis fringilla nunc. In hac habitasse platea dictumst. Aenean nisi mi, mattis at efficitur eget, posuere a libero. Nam vehicula diam purus, lacinia tincidunt mauris venenatis vel. Aenean porta, nulla et ultrices maximus, risus augue commodo arcu, id mattis orci lorem eget metus. Aliquam felis lectus, pretium at eros vitae, ullamcorper egestas ex.
      </Section>
    </div>
  )
}

export default ContactPage;
