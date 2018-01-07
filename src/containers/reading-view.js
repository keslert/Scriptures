import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import PageView from '../components/page-view'
import VerseView from '../components/verse-view'
import ScrollView from '../components/scroll-view'
import Spinner from 'react-spinkit';

import { getActiveChapter, fetchBook } from '../core/scriptures';
import { getActiveBookmark } from '../core/bookmarks';
import { getReadingMode, getActiveFontSize } from '../core/ui';
import { capitalize } from '../core/utils';
import { Flex, Box } from 'rebass';

import $ from 'jquery'

class ReadingView extends React.Component {

  componentDidMount() {
    const {
      onMouseUp,
      onMousedDownWord,
    } = this.props;

    // $(document)
    //   .on('mouseup', () => {
    //     onMouseUp(null);
    //   })
    //   .on('mousedown', (e) => {
    //     if (!e.target.classList.contains('word')) {
    //       onMousedDownWord(null);
    //     }
    //   })
  }

  componentDidUpdate(oldProps) {
    const { bookmark, fetchBook } = this.props;
    if (bookmark.book !== oldProps.bookmark.book) {
      fetchBook(bookmark.work, bookmark.book);
    }
  }

  renderLoading() {
    return (
      <Spinner
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}
        name='line-scale'
        color="#cdc1a4"
      />
    )
  }

  renderPage() {
    const { chapter, bookmark, fontSize } = this.props;

    return (
      <PageView 
        fontSize={fontSize}
        page={chapter.pages[bookmark.page]} 
        />
    )
  }

  renderVerse() {
    const { 
      chapter: { verses }, 
      bookmark: {book, chapter, verse},
      fontSize,
    } = this.props;

    return (
      <VerseView
        fontSize={fontSize}
        verse={verses[verse]} 
        label={`${capitalize(book)} ${chapter + 1} : ${verse + 1}`}
        />
    )
  }

  renderScroll() {
    const { fontSize, chapter: { verses } } = this.props;
    return (
      <ScrollView
        fontSize={fontSize}
        verses={verses} 
        />
    )
  }

  render() {
    const { chapter, isPageMode, isVerseMode, isScrollMode } = this.props;

    if(!chapter)
      return this.renderLoading();

    return (
      <Flex p={4} align="center" justify="center" flex={1} style={{overflow: 'auto'}}>
        <Box style={{height: '100%'}}>
          {isPageMode && this.renderPage()}
          {isVerseMode && this.renderVerse()}
          {isScrollMode && this.renderScroll()}
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = createSelector(
  getActiveBookmark,
  getActiveChapter,
  getReadingMode,
  getActiveFontSize,
  (bookmark, chapter, readingMode, fontSize) => ({
    bookmark,
    chapter,
    isPageMode: readingMode === 'page',
    isVerseMode: readingMode === 'verse',
    isScrollMode: readingMode === 'scroll',
    fontSize,
  })
)

const mapDispatchToProps = { 
  fetchBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingView);