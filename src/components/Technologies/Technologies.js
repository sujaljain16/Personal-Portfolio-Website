import React from 'react';
import {  SiFirebase, SiReact,SiLeaflet } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider /><br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with various technologies in the web development and also tried latest technologies including blockchain

    </SectionText>
    <List>
      <ListItem>
        <SiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with<br />
            React JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with<br />
            Node Firebase and MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiLeaflet size="3rem" />
        <ListContainer>
          <ListTitle>Integrating apis</ListTitle>
          <ListParagraph>
            Experience with<br />
            Leaflet maps api and covid19.org api
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
