import React from 'react';
import styled from 'styled-components';

class Verse extends React.PureComponent {

  handleClick = () => {
    const { verse, readingMode, onClick } = this.props;
    if(readingMode === 'verse') {
      onClick(verse)
    }
  }

  render() {
    const { verse, bookmark, readingMode, onClick } = this.props;

    const isVerseMode = readingMode === 'verse'
    return (
      <StyledVerse
        isActive={isVerseMode && verse.verseIndex === bookmark.verse}
        onClick={this.handleClick}
        height={`${verse.lines.length / 7}em`} 
        className="verse"
        />
    )
  }
}

export default Verse;

const StyledVerse = styled.div`
  border-radius: 1px;
  margin-bottom: 2px;
  ${props => `
    height: ${props.height};
    background: ${props.theme.colors[props.isActive ? 'secondaryLight' : 'offLight']};
    &:hover {
      background: ${props.theme.colors.secondaryLight}
    }
  `}
`