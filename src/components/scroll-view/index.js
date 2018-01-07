import React from 'react';
import styled from 'styled-components';
import Verse from '../page-view/verse';
import { FadeIn } from '../../styles/animations';
import { Box } from 'rebass';

const StyledScrollView = styled.div`
  font-size: ${props => props.fontSize}px;
  padding: 6em 0;
  animation: ${FadeIn} 300ms ease-out forwards;
`;

class ScrollView extends React.PureComponent {

  render() {
    const { verses, fontSize } = this.props;
    return (
      <StyledScrollView fontSize={fontSize}>
        {verses.map(verse => 
          <Box mb='2.5em' key={verse.verseIndex}>
            <Verse {...verse} />
          </Box>
        )}
      </StyledScrollView>
    )
  }
}

export default ScrollView;