import React from 'react';
import styled from 'styled-components';
import Verse from './verse';

class Column extends React.PureComponent {
  
  render() {
    const { column, bookmark, readingMode, onClick } = this.props;
  
    return (
      <StyledColumn justify={column.isLast ? 'flex-start' : 'space-between'}>
        {column.verses.map((verse, i) => 
          <Verse 
            key={i}
            verse={verse}
            readingMode={readingMode}
            bookmark={bookmark}
            onClick={onClick}
            />
        )}
      </StyledColumn>
    )
  }
}

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
  margin-right: 0.2em;
  height: 3.8em;
  width: 1.2em;
`;