import React from 'react';
import Page from './page';
import { Box, Flex } from 'rebass';

class ChapterSummary extends React.PureComponent {

  handleClick = () => {

  }

  render() {
    const { bookmark, readingMode, chapter } = this.props;

    return (
      <Flex>
        {chapter.pages.map((page, i) =>
          <Page
            key={i}
            page={page}
            bookmark={bookmark}
            readingMode={readingMode} 
            onClick={this.handleClick}
            />
        )}
      </Flex>
    )
  }
}

export default ChapterSummary;