import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';


import PageView from '../components/page-view'
import VerseView from '../components/verse-view'
import Toolbar from '../components/toolbar';
import Sidebar from '../components/sidebar';
import { getActiveBookmark } from '../core/bookmarks';
import { getReadingMode, uiActions } from '../core/ui';
import { Flex, Box } from 'rebass';


import { getActive, onMousedDownWord } from '../core/ui';
import { fetchBook } from '../core/scriptures';
import { getSidebarType } from '../core/sidebar';

import { capitalize } from '../core/utils';

import Spinner from 'react-spinkit';
import $ from 'jquery';


class App extends React.Component {

  componentDidMount() {
    const { 
      previous, 
      previousChapter, 
      advance, 
      advanceChapter, 
      onMouseUp, 
      onMousedDownWord,
    } = this.props;

    $(document)
    .on('keydown', e => {
      const tag = e.target.tagName.toLowerCase();
      if(tag === 'input' || tag === 'textarea') {
        return;
      }

      if(e.which === 37 || e.which === 40) {
        if(e.shiftKey) {
          previousChapter();
        } else {
          previous();
        }
      } else if(e.which === 39 || e.which === 38) {
        if(e.shiftKey) {
          advanceChapter();
        } else {
          advance();
        }
      }
    })
    .on('mouseup', () => {
      onMouseUp(null);
    })
    .on('mousedown', (e) => {
      if(!e.target.classList.contains('word')) {
        onMousedDownWord(null);
      }
    })
  }

  componentDidUpdate(oldProps) {
    const { active, fetchBook } = this.props;
    if(active.book !== oldProps.active.book) {
      fetchBook(active.work, active.book);
    }
  }

  renderReadingView() {
    const { active, page, verse, readingMode } = this.props;
    if(!page) {
      return (
        <Flex justify="center" align="center">
          <Spinner name='line-scale' color="#cdc1a4" />
        </Flex>
      )
    }

    return readingMode === 'page'
            ? <PageView page={page} /> 
            : <VerseView verse={verse} label={`${capitalize(active.book)} ${active.chapter + 1} : ${active.verse + 1}`} />
  }

  render() {
    const { chapter, sidebarOpen } = this.props;

    const sidebarWidth = sidebarOpen ? 220 : 0;
    return (
      <Box>
        <Flex 
          w={`calc(100% - ${sidebarWidth}px`}
          direction="column" 
          style={{overflowY: 'auto', height: '100vh'}}
          >
          <Toolbar />
          <Flex flex={1}>
            {this.renderReadingView()}
          </Flex>
          
        </Flex>
        
        <Sidebar open={sidebarOpen} />
        
      </Box>
    );
  }
}

const mapStateToProps = createSelector(
  getActiveBookmark,
  getReadingMode,
  getSidebarType,
  (bookmark, readingMode, sidebarType) => ({
    bookmark,
    readingMode,
    sidebarOpen: !!sidebarType,
  })
)

const mapDispatchToProps = Object.assign({fetchBook, onMousedDownWord}, uiActions);
export default connect(mapStateToProps, mapDispatchToProps)(App);