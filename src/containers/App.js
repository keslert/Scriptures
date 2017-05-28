import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';


import PageView from '../components/page-view'
import VerseView from '../components/verse-view'
import Toolbar from '../components/toolbar';
import Sidebar from '../components/sidebar';
import { getReadingMode, uiActions } from '../core/ui';
import { StyledCentered, StyledFlex } from '../components/common/styled-base';


import { getActive } from '../core/ui';
import { fetchBook, getActiveChapter, getActivePage, getActiveVerse } from '../core/scriptures';

import { capitalize } from '../core/utils';

import Spinner from 'react-spinkit';
import $ from 'jquery';

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledReadingView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

class App extends React.Component {

  componentDidMount() {
    const { 
      previous, 
      previousChapter, 
      advance, 
      advanceChapter, 
      onMouseUp, 
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
      return <StyledCentered><Spinner spinnerName='wave' /></StyledCentered>
    }

    return readingMode === 'page'
            ? <PageView page={page} /> 
            : <VerseView verse={verse} label={`${capitalize(active.book)} ${active.chapter + 1} : ${active.verse + 1}`} />
  }

  render() {
    const { chapter } = this.props;
    return (
      <StyledApp>
        <StyledReadingView>
          <StyledFlex>
            {this.renderReadingView()}
          </StyledFlex>
          <Toolbar chapter={chapter} />
        </StyledReadingView>
        <Sidebar />
        
      </StyledApp>
    );
  }
}

const mapStateToProps = createSelector(
  getActive,
  getActiveChapter,
  getActivePage,
  getActiveVerse,
  getReadingMode,
  (active, chapter, page, verse, readingMode) => ({
    readingMode,
    active,
    chapter,
    page,
    verse,
  })
)

const mapDispatchToProps = Object.assign({fetchBook}, uiActions);
export default connect(mapStateToProps, mapDispatchToProps)(App);