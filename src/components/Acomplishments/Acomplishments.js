import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Solidity' },
  { number: 2, text: 'Javascript', },
  { number: 3, text: ' React.js', },
  { number: 5000, text: 'Python', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Programming Languages</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>

          <BoxText>{card.text}</BoxText>
        </Box>

      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
