import React from 'react';
import { DiAndroid, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { logos } from '../../constants/constants';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const logoStyle = {
  height: '48px',
  width: '48px',
  marginBottom: '12px',
};

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle style={{ marginTop: '16px' }}>Technologies</SectionTitle>
    <SectionText>
      Cross platform mobile app development with react-native and FLutter.
      front-end web development with React.js and next.js. backend development
      with Node.js
    </SectionText>
    <List>
      <ListItem>
        <div style={{ display: 'flex' }}>
          <img src={logos.android} style={logoStyle} />
          <div style={{ width: '12px' }} />
          <img src={logos.flutter} style={logoStyle} />
        </div>

        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React-native and Flutter.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: 'flex' }}>
          <img src={logos.react} style={logoStyle} />
          <div style={{ width: '12px' }} />
          <img src={logos.next} style={logoStyle} />
        </div>
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: 'flex' }}>
          <img src={logos.node} style={logoStyle} />
        </div>
        <ListContainer>
          <ListTitle>Back-End Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
