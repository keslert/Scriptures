import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Flex, Box } from 'rebass';

import { getActiveBookmark } from '../../core/bookmarks'
import { getActiveChapter } from '../../core/scriptures'
import { getReadingMode } from '../../core/ui'

import ChapterSummary from '../chapter-summary';


class Toolbar extends React.Component {

  render() {

    const { chapter, bookmark, readingMode } = this.props;
    console.log(chapter)
    if(!chapter)
      return null

    return (
      <Flex>
        <Box flex={1}>
          <div className="IconBar" />
        </Box>
        <div className="ChapterSelection" />
        <Box flex={1}>
          <ChapterSummary 
            chapter={chapter}
            bookmark={bookmark}
            readingMode={readingMode}
            />
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = createSelector(
  getActiveBookmark,
  getActiveChapter,
  getReadingMode,
  (bookmark, chapter, readingMode) => ({
    bookmark,
    chapter,
    readingMode,
  })
)
export default connect(mapStateToProps)(Toolbar);