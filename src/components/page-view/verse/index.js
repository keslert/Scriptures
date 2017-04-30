import React from 'react';
import styled from 'styled-components';
import Line from '../line';
import theme from '../../../styles/theme';

const StyledVerse = styled.div`
  font-family: 'Lusitana';
  line-height: 0.7em;
  margin-bottom: 0.2em;
  width: 24em;
`

const Verse = ({
  lines
}) => (
  <StyledVerse>
    {lines.map((line, i) => 
      <Line key={i} {...line} />
    )}
  </StyledVerse>
)
export default Verse;