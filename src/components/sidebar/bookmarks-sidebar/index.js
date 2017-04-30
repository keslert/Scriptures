import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setActiveBookmark, addBookmark, getBookmarks } from '../../../core/ui';
import { capitalize } from '../../../core/utils';
import { StyledCell, StyledTitle, StyledAction } from '../styled';

import BookmarkIcon from 'react-icons/lib/md/bookmark';
import AddIcon from 'react-icons/lib/fa/plus-circle';



class BookmarksSidebar extends React.Component {
  render() {
    const { bookmarks, setActiveBookmark, addBookmark } = this.props;

    return (
      <div>
        <StyledTitle><BookmarkIcon /> Bookmarks</StyledTitle>
        {bookmarks.map((bookmark, i) => (
          <StyledCell key={i} onClick={() => setActiveBookmark(i)}>
            {`${capitalize(bookmark.book)} ${bookmark.chapter + 1}`}
          </StyledCell>
        ))}

        <StyledAction onClick={addBookmark}>
          <AddIcon /> Add Bookmark
        </StyledAction>
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getBookmarks,
  // getActiveBookmarkIndex,
  (bookmarks) => ({
    bookmarks,
  })
)
const mapDispatchToProps = {
  setActiveBookmark,
  addBookmark,
  // deleteBookmark,
}
export default connect(mapStateToProps, mapDispatchToProps)(BookmarksSidebar);