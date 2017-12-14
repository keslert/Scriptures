import React from 'react';
import styled from 'styled-components';

class Verse extends React.PureComponent {

  render() {
    const { verse, bookmark, onVerseClick } = this.props;

    return (
      <StyledVerse
        isActive={verse.verseIndex === bookmark.verse}
        onClick={onVerseClick}
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