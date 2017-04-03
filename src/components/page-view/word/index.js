import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const StyledWord = styled.span`
  margin-bottom: 1rem;
  &:hover {
    color: ${theme.secondary};
  }
`

const Word = ({
  text
}) => (
  <StyledWord>
    {text}
  </StyledWord>
)
export default Word;