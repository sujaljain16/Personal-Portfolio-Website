import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { CarouselMobileScrollNode } from '../TimeLine/TimeLineStyles';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
  Hey👋 <br />
  I'm Sujal Jain
  </SectionTitle>
  <SectionText>
    I am a full stack Web Devoloper, designer and programmer.
  </SectionText>
  <Button onClick={()=>window.location='https://github.com/sujaljain16'}>Learn more</Button>
</LeftSection>
</Section>
);

export default Hero;