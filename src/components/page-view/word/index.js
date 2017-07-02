import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { onMousedDownWord, onHoveredWord, getSelectedRange, getMousedDownWord } from '../../../core/ui';
import HighlightBar from '../../highlight-bar';

const StyledWord = styled.span`
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
  mousedDownWord,
}) => {
  const isSelected = 
    selectedRange && 
    selectedRange.start.wordIndex <= wordIndex &&
    selectedRange.end.wordIndex >= wordIndex


  const showTooltip = isSelected && selectedRange.start.wordIndex === wordIndex && !mousedDownWord
  
  return (
    <StyledWord 
      selected={isSelected}
      onMouseDown={() => onMousedDownWord({wordIndex, verseIndex})}
      onMouseEnter={() => onHoveredWord({wordIndex, verseIndex})}
      className="word"
      >
      {text}
      { showTooltip && <HighlightBar /> }
    </StyledWord>
  )
}

const mapStateToProps = createSelector(
  getSelectedRange,
  getMousedDownWord,
  (selectedRange, mousedDownWord) => ({
    selectedRange,
    mousedDownWord,
  })
)

const mapDispatchToProps = {
  onMousedDownWord,
  onHoveredWord
}

export default connect(mapStateToProps, mapDispatchToProps)(Word);