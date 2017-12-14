import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Flex, Box } from 'rebass';

import { works } from '../core/scriptures/utils';
import { getActiveBookmark, updateBookmark } from '../core/bookmarks'
import { getActiveChapter } from '../core/scriptures'
import { getReadingMode } from '../core/ui'

import ChapterSummary from '../components/chapter-summary'
import WorksSelector from '../components/works-selector'

import theme from '../styles/rebass-theme'


class Toolbar extends React.Component {

  handleWorksChange = ({work, book, chapter}) => {
    this.props.updateBookmark({work, book, chapter, page: 0, verse: 0})
  }

  handleSummaryClick = (item) => {
    if(item.isPage) {
      this.props.updateBookmark({page: item.pageIndex})
    } else {
      this.props.updateBookmark({verse: item.pageIndex})
    }
  }

  render() {

    const { chapter, bookmark, readingMode } = this.props;

    const navStyle = {boxShadow: theme.shadows.basic, height: 65}

    return (
      <Flex direction="row" py={1} px={2} align="center" bg="#ffffff" style={navStyle}>
        <Box flex={1}>
          <div className="IconBar"></div>
        </Box>
        <Box>
          <WorksSelector
            works={works}
            chapter={chapter}
            bookmark={bookmark}
            onChange={this.handleWorksChange}
            />
        </Box>
        <Flex flex={1} justify="flex-end">
          <ChapterSummary 
            chapter={chapter}
            bookmark={bookmark}
            readingMode={readingMode}
            onClick={this.handleSummaryClick}
            />
        </Flex>
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

const mapDispatchToProps = {
  updateBookmark,
}
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);