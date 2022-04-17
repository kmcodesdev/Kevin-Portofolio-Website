import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Kevin's Portofolio
      </SectionTitle>
      <SectionText>
        Kevin Martin is an Experienced & Highly Motivated Full Stack Blockchain Developer. <br />
        With a long-term passion for Crypto & Web 3.0
      </SectionText>
      <Button onClick={() => window.location = `https://www.canva.com/design/DAE9-Brm558/l8NfZl4RyiNETrAklGJchQ/view?website#1`} target="_blank">
        View Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;