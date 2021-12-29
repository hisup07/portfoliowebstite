import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, i'm Supriyo Mondal <br />
        I'm a software developer.
      </SectionTitle>
      <SectionText>
        I have serious passion for UI effects, animations and creating
        intuitive, dynamic user experiences.
      </SectionText>
      <Button>
        <a href='#footer' style={{ color: 'white' }}>
          Connect with me
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
