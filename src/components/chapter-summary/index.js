import React from 'react';
import Page from './page';
import { Box, Flex } from 'rebass';

class ChapterSummary extends React.Component {

  render() {
    const { bookmark, readingMode, chapter, onClick } = this.props;

    if(!chapter)
      return null;

    return (
      <Flex direction="row">
        {chapter.pages.map((page, i) =>
          <Page
            key={i}
            page={page}
            bookmark={bookmark}
            readingMode={readingMode} 
            onClick={onClick}
            />
        )}
      </Flex>
    )
  }
}

export default ChapterSummary;