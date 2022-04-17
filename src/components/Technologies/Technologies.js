import React from 'react';
import { DiFirebase, DiReact, DiNetbeans } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm a student & practitioner of these technologies,
      I use them daily for my work.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End
            <ListParagraph>
              Developing a great visual experience that let users interact.
            </ListParagraph>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End
            <ListParagraph>
              Taking care of the right API's in order to connect applications to the Blockchain.
            </ListParagraph>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNetbeans size="3rem" />
        <ListContainer>
          <ListTitle>Solidity Smart Contract
            <ListParagraph>
              Developing & deploying the right smart contracts to automate the execution of an agreement.
            </ListParagraph>
          </ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
