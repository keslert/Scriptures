import React from 'react';
import styled from 'styled-components';

const StyledWord = styled.span`
  margin-bottom: 1rem;
`

const Word = ({
  text
}) => (
  <StyledWord>
    {text}
  </StyledWord>
)
export default Word;