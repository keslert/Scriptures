import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Flex, Box } from 'rebass';

import { works } from '../core/scriptures/utils';
import { getActiveBookmark, updateBookmark } from '../core/bookmarks'
import { getActiveChapter } from '../core/scriptures'
import { 
  getReadingMode, 
  setReadingMode, 
  increaseFontSize, 
  decreaseFontSize,
} from '../core/ui'

import ChapterSummary from '../components/chapter-summary'
import WorksSelector from '../components/works-selector'
import ReadingModeSelector from '../components/reading-mode-selector'
import ScriptureSlider from '../components/scripture-slider'
import ZoomButtons from '../components/zoom-buttons'

import theme from '../styles/rebass-theme'


class Toolbar extends React.Component {

  handleWorksChange = ({work, book, chapter}) => {
    this.props.updateBookmark({work, book, chapter, page: 0, verse: 0})
  }

  handleSummaryClick = (item) => {
    if(item.isPage) {
      this.props.updateBookmark({page: item.pageIndex})
    } else {
      this.props.updateBookmark({verse: item.verseIndex})
    }
  }

  handleReadingModeClick = (mode) => {
    this.props.setReadingMode(mode);
  }

  handleSliderChange = ({book, chapter}) => {
    this.props.updateBookmark({book, chapter});
  }

  render() {

    const { chapter, bookmark, readingMode } = this.props;

    const navStyle = {boxShadow: theme.shadows.basic}

    return (
      <Flex direction="column" style={navStyle}>
        <Flex direction="row" py={1} px={2} align="center" bg="#ffffff">
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
          <Flex flex={1} justify="flex-end" align="center">
            <ChapterSummary 
              chapter={chapter}
              bookmark={bookmark}
              readingMode={readingMode}
              onClick={this.handleSummaryClick}
              />
            <ReadingModeSelector
              readingMode={readingMode}
              onClick={this.handleReadingModeClick}
              />
            <ZoomButtons
              onZoomIn={this.props.increaseFontSize}
              onZoomOut={this.props.decreaseFontSize}
              />
          </Flex>
        </Flex>
        <Box my="-7px" pl={1}>
          <ScriptureSlider
            works={works}
            bookmark={bookmark}
            onChange={this.handleSliderChange}
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

const mapDispatchToProps = {
  updateBookmark,
  setReadingMode,
  increaseFontSize,
  decreaseFontSize,
}
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);