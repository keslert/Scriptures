import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { 
  isVerseHovered, 
  isVerseActive, 
  setHoveredVerse, 
  getReadingMode,
} from '../../../core/ui';


const StyledVerse = styled.div`
  border-radius: 1px;
  ${props => `
    height: ${props.height};
    background: ${props.background};
  `}
`

const Verse = ({
  verse,
  lines,
  setHoveredVerse,
  isHovered,
  isActive,
}) => {

  const background = isActive ? theme.secondary : isHovered ? theme.grey : theme.offLight;

  return (
    <StyledVerse
      background={background}
      onMouseEnter={() => setHoveredVerse(verse)}
      onMouseLeave={() => setHoveredVerse(null)}
      height={`${lines.length * 3}px`} 
      className="verse" 
      />
  )
}

const mapStateToProps = createSelector(
  isVerseHovered,
  isVerseActive,
  getReadingMode,
  (isHovered, isActive, readingMode) => ({
    isHovered: isHovered && readingMode === 'verse',
    isActive: isActive && readingMode === 'verse',
    readingMode,
  })
)
const mapDispatchToProps = Object.assign({setHoveredVerse})

export default connect(mapStateToProps, mapDispatchToProps)(Verse);