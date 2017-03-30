import React from 'react';
import styled from 'styled-components';
import Line from '../line';

const StyledVerse = styled.div`
  font-size: 15px;
  line-height: 12px;
`

const Verse = ({
  lines
}) => {

  const lastIndex = lines.length - 1;
  return (
    <StyledVerse>
      {lines.map((line, i) => 
        <Line 
          key={i} 
          {...line} 
          />
      )}
    </StyledVerse>
  )
}
export default Verse;