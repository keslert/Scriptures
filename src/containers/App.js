import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PageView from '../components/page-view'
import VerseView from '../components/verse-view'
import Toolbar from '../components/toolbar';
import { getReadingMode } from '../core/ui';
import { StyledFlex, StyledScrollable } from '../components/common/styled-base';

import { fetchBook, getActiveChapter, getActiveVerse } from '../core/scriptures';


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const StyledReadingView = styled.div`
  flex: 1;
  overflow: auto;
`

class App extends React.Component {

  componentDidMount() {
    this.props.fetchBook('1 Nephi');
  }

  renderReadingView() {
    const { chapter, verse, readingMode } = this.props;
    if(!chapter) {
      return <h3>Loading...</h3>
    }

    return readingMode === 'page'
            ? <PageView {...chapter} /> 
            : <VerseView {...chapter} />
  }

  render() {
    const { chapter, verse, readingMode } = this.props;
    return (
      <StyledApp>
        <StyledReadingView>
          {this.renderReadingView()}
        </StyledReadingView>
        <Toolbar chapter={chapter} />
      </StyledApp>
    );
  }
}

const mapStateToProps = createSelector(
  getActiveChapter,
  getActiveVerse,
  getReadingMode,
  (chapter, verse, readingMode) => ({
    readingMode,
    chapter,
    verse,
  })
)

const mapDispatchToProps = Object.assign({fetchBook});
export default connect(mapStateToProps, mapDispatchToProps)(App);