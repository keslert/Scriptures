import React from 'react';
import styled from 'styled-components';
import Verse from '../verse';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem;
  height: 600px;
  width: 355px;
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