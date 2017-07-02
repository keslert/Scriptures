import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setActiveBookmark, addBookmark, getBookmarks } from '../../../core/ui';
import { capitalize } from '../../../core/utils';
import { StyledAction } from '../styled';

import SidebarCell from '../sidebar-cell';
import SidebarHeading from '../sidebar-heading';
import AddIcon from 'react-icons/lib/fa/plus-circle';



class GuidesSidebar extends React.Component {
  render() {
    const { bookmarks, setActiveBookmark, addBookmark } = this.props;

    return (
      <div>
        <SidebarHeading>Guides</SidebarHeading>
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
          <AddIcon /> Add Guide
        </StyledAction>
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getBookmarks,
  (bookmarks) => ({
    bookmarks,
  })
)
const mapDispatchToProps = {
  setActiveBookmark,
  addBookmark,
}
export default connect(mapStateToProps, mapDispatchToProps)(GuidesSidebar);