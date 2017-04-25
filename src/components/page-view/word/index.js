import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { onMousedDownWord, onHoveredWord, getSelectedRange } from '../../../core/ui';

const StyledWord = styled.span`
  margin-bottom: 1rem;
  position: relative;
  ${props => `
    ${props.selected && `
      color: ${theme.secondary};
    `};
  `};
`;

const Word = ({
  text,
  wordIndex,
  verseIndex,
  selectedRange,
  onMousedDownWord,
  onHoveredWord,
}) => {

  const isSelected = 
    selectedRange && 
    selectedRange.start.wordIndex <= wordIndex &&
    selectedRange.end.wordIndex >= wordIndex
  return (
    <StyledWord 
      selected={isSelected}
      onMouseDown={() => onMousedDownWord({wordIndex, verseIndex})}
      onMouseEnter={() => onHoveredWord({wordIndex, verseIndex})}
      >
      {text}
    </StyledWord>
  )
}

const mapStateToProps = createSelector(
  getSelectedRange,
  (selectedRange) => ({
    selectedRange,
  })
)

const mapDispatchToProps = {
  onMousedDownWord,
  onHoveredWord
}

export default connect(mapStateToProps, mapDispatchToProps)(Word);