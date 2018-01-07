import React from 'react';
import styled from 'styled-components';
import Line from '../line';

const StyledVerse = styled.div`
  font-family: 'Lusitana';
  line-height: 0.7em;
  margin-bottom: 0.2em;
  min-width: 22em;
`

const Verse = ({
  lines
}) => (
  <StyledVerse className="verse">
    {lines.map((line, i) => 
      <Line key={i} {...line} />
    )}
  </StyledVerse>
)
export default Verse;