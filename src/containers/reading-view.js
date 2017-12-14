import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import PageView from '../components/page-view'
import VerseView from '../components/verse-view'
import Spinner from 'react-spinkit';

import { getActiveChapter, fetchBook } from '../core/scriptures';
import { getActiveBookmark } from '../core/bookmarks';
import { getReadingMode } from '../core/ui';
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
    const { chapter, bookmark } = this.props;

    return (
      <PageView page={chapter.pages[bookmark.page]} />
    )
  }

  renderVerse() {
    const { chapter, bookmark } = this.props;

    return (
      <VerseView
        verse={chapter.verses[bookmark.verse]} 
        label={`${capitalize(bookmark.book)} ${bookmark.chapter + 1} : ${bookmark.verse + 1}`}
        />
    )
  }

  render() {
    const { chapter, isPageMode, isVerseMode } = this.props;

    if(!chapter)
      return this.renderLoading();

    return (
      <Flex align="center" justify="center" flex={1}>
        {isPageMode && this.renderPage()}
        {isVerseMode && this.renderVerse()}
      </Flex>
    );
  }
}

const mapStateToProps = createSelector(
  getActiveBookmark,
  getActiveChapter,
  getReadingMode,
  (bookmark, chapter, readingMode) => ({
    bookmark,
    chapter,
    isPageMode: readingMode === 'page',
    isVerseMode: readingMode === 'verse',
  })
)

const mapDispatchToProps = { 
  fetchBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingView);