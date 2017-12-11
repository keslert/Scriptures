import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getBookmarksList, addBookmark, setActiveBookmark } from '../../../core/bookmarks';
import { capitalize } from '../../../core/utils';
import { StyledAction } from '../styled';

import SidebarCell from '../sidebar-cell';
import SidebarHeading from '../sidebar-heading';
import AddIcon from 'react-icons/lib/fa/plus-circle';


class BookmarksSidebar extends React.Component {
  render() {
    const { bookmarks, setActiveBookmark, addBookmark } = this.props;

    return (
      <div>

        <SidebarHeading>Bookmarks</SidebarHeading>
        {bookmarks.map((bookmark, i) => (
          <SidebarCell 
            key={i} 
            onClick={() => setActiveBookmark(i)}
            draggable
            menu
            >
            {`${capitalize(bookmark.book)} ${bookmark.chapter + 1}`}
          </SidebarCell>
        ))}

        <StyledAction onClick={addBookmark}>
          <AddIcon /> Add Bookmark
        </StyledAction>
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getBookmarksList,
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