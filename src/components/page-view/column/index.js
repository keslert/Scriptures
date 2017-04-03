import React from 'react';
import styled from 'styled-components';
import Verse from '../verse';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em 2em;
  height: 36em;
`

const Column = ({
  verses
}) => (
  <StyledColumn>
    {verses.map((verse, i) => 
      <Verse key={i} {...verse} />
    )}
  </StyledColumn>
)
export default Column;