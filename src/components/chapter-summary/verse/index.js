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
  setActiveVerse,
} from '../../../core/ui';


const StyledVerse = styled.div`
  border-radius: 1px;
  margin-bottom: 2px;
  ${props => `
    height: ${props.height};
    background: ${props.background};
  `}
`

const Verse = ({
  verse,
  lines,
  readingMode,
  isHovered,
  isActive,
  setHoveredVerse,
  setActiveVerse,
}) => {

  const background = isActive || isHovered ? theme.grey : theme.offLight;

  return (
    <StyledVerse
      onClick={() => setActiveVerse(lines[0].verse)}
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
const mapDispatchToProps = Object.assign({setHoveredVerse, setActiveVerse})

export default connect(mapStateToProps, mapDispatchToProps)(Verse);