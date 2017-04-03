import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PageView from '../components/page-view'
import VerseView from '../components/verse-view'
import { parseChapter } from '../core/generator';
import Toolbar from '../components/toolbar';
import { getReadingMode } from '../core/ui';
import { StyledFlex, StyledScrollable } from '../components/common/styled-base';


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

  constructor() {
    super();
    this.state = {
      chapter: parseChapter({
        scriptures: 'Book of Mormon',
        book: '1 Nephi',
        chapter: 1,
      })
    }
  }


  render() {
    const { chapter } = this.state;
    const { readingMode } = this.props;
    return (
      <StyledApp>
        <StyledReadingView>
          {readingMode === 'page'
            ? <PageView {...chapter} /> 
            : <VerseView {...chapter} />
          }
        </StyledReadingView>
        <Toolbar chapter={chapter} />
      </StyledApp>
    );
  }
}

const mapStateToProps = createSelector(
  getReadingMode,
  (readingMode) => ({
    readingMode,
  })
)
export default connect(mapStateToProps)(App);