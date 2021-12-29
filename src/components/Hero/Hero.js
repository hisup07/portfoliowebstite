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
        Hello there!! <br />
        Welcome To My Personal Portfolio.
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam
        tempora consequuntur nam error distinctio sit sint explicabo temporibus!
        Tempore.
      </SectionText>
      <Button
        onClick={() => {
          console.log('hello');
        }}
      >
        Connect with me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
