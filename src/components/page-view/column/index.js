import React from 'react';
import styled from 'styled-components';
import Verse from '../verse';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
  margin: 1em 2em;
  height: 38em;
`

const Column = ({
  isLast,
  verses
}) => (
  <StyledColumn justify={isLast ? 'flex-start' : 'space-between'}>
    {verses.map((verse, i) => 
      <Verse key={i} {...verse} />
    )}
  </StyledColumn>
)
export default Column;