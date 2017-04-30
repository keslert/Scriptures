import React from 'react';
import { StyledSidebar } from './styled';
import BookmarksSidebar from './bookmarks-sidebar';

class Sidebar extends React.Component {


  render() {
    return (
      <StyledSidebar>
        <BookmarksSidebar />
      </StyledSidebar>
    )
  }
}

export default Sidebar;