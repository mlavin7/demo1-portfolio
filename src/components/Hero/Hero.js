import React from 'react';

import { LinkContainer, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Matilda's Personal Portfolio
      </SectionTitle>
      <SectionText>
        this portfolio contains my projects as a front-end, as UX/UI
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
    
    
   
    
   
  </Section>
);

export default Hero;