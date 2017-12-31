import React from 'react';
import styled from 'styled-components';
import Word from '../word';
import { Flex } from 'rebass'

const StyledNumber = styled.span`
  margin-right: 0.5em;
  color: ${props => props.theme.colors.secondaryDark};
  font-size: 0.9em;
  font-family: ${props => props.theme.font};
`

const StyledWords = styled.span`
  display: flex;
  justify-content: ${props => props.justify};
  flex: 1;
  > span:not(:last-child) {
    margin-right: 0.2em;
  }
`

const Line = ({
  verse,
  isFirst,
  isLast,
  words,
}) => (
  <Flex mb=".7em" align="baseline">
    {isFirst ? <StyledNumber>{verse + 1}</StyledNumber> : null}
    <StyledWords justify={isLast ? 'flex-start' : 'space-between'}>
      {words.map((word, i) => <Word key={i} {...word} />)}
    </StyledWords>
  </Flex>
)
export default Line;