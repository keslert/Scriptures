import React from 'react';
import styled from 'styled-components';
import Word from '../word';

const StyledLine = styled.div`
  display: flex;
  margin-bottom: 0.8em;
`

const StyledNumber = styled.span`
  margin: 0 0.5em;
`

const StyledWords = styled.span`
  display: flex;
  justify-content: ${props => props.justify};
  flex: 1;
  :not(:last-child) {
    margin-right: 0.2em;
  }
`

const Line = ({
  verse,
  isFirst,
  isLast,
  words,
}) => (
  <StyledLine>
    {isFirst ? <StyledNumber>{verse + 1}</StyledNumber> : null}
    <StyledWords justify={isLast ? 'flex-start' : 'space-between'}>
      {words.map((word, i) => <Word key={i} {...word} />)}
    </StyledWords>
  </StyledLine>
)
export default Line;