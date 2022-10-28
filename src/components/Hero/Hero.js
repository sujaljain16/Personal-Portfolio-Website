import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { CarouselMobileScrollNode } from '../TimeLine/TimeLineStyles';
import { LeftSection } from './HeroStyles';
var ReactRotatingText = require("react-rotating-text");
const Hero = (props) => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
  Hey👋 <br />
  I'm Sujal Jain
  </SectionTitle>
  <SectionText>
    I'M A
    <ReactRotatingText
              items={[
                " FULL STACK WEB DEVELOPER",
                " DESIGNER",
                " COMPETITIVE CODER",
              ]}
              color="#FFFFFF"
              font-size="40px"
            />
  </SectionText>
  <Button onClick={()=>window.location='https://github.com/sujaljain16'}>Learn more</Button>
</LeftSection>
</Section>
);

export default Hero;