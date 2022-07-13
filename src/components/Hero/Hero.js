import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
    Hii there<br />
    I am Sujal Jain..
  </SectionTitle>
  <SectionText>
    I am a Web Devoloper and make user friendly websites .
  </SectionText>
  <Button onclick={()=>window.location='http://github.com'}>Learn more</Button>
</LeftSection>
</Section>
);

export default Hero;