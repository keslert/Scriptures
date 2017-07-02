import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { StyledSidebar } from './styled';
import { getSidebarType, showSidebar } from '../../core/sidebar'

import BookmarksSidebar from './bookmarks-sidebar';
import GuidesSidebar from './guides-sidebar';

import * as types from '../../core/sidebar/sidebar-types';
import { map, values } from 'lodash';

const StyledMenu = styled.div`
  position: fixed;
  bottom: 4px;
  right: 25px;
  font-weight: bold;
  &:not(:hover) .item {
    bottom: 0;
  }
  &:hover .item {
    opacity: 1;
  }

  ${props => `
    ${props.hidden && 'opacity: 0'};    
  `}
`

const StyledMenuItem = styled.div`
  position: absolute;
  right: 0;
  bottom: ${props => props.bottom}px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  padding: 10px 0;
  width: 100px;
  text-align: right;
  &.item {
    opacity: 0;
  }
  &:hover {
    color: #575757;
  }
`;


const sidebars = {
  [types.BOOKMARKS_SIDEBAR]: {
    key: types.BOOKMARKS_SIDEBAR,
    label: 'Bookmarks',
    component: BookmarksSidebar,
  },
  [types.GUIDES_SIDEBAR]: {
    key: types.GUIDES_SIDEBAR,
    label: 'Guides',
    component: GuidesSidebar,
  },
  [types.CHAINS_SIDEBAR]: {
    key: types.CHAINS_SIDEBAR,
    label: 'Chains',
    component: BookmarksSidebar,
  },
}

class Sidebar extends React.Component {

  render() {
    const { sidebarType, showSidebar } = this.props;
    const sidebar = sidebars[sidebarType]

    const open = !!sidebar;
    return (
      <div>
        <StyledSidebar open={open}>
          {open && <sidebar.component />}
        </StyledSidebar>

        <StyledMenu hidden={open}>
          {map(values(sidebars), (sidebar, i) => (
            <StyledMenuItem 
              key={i}
              className="item" 
              bottom={(i + 1) * 30} 
              onClick={() => showSidebar(sidebar.key)}>
              {sidebar.label}
            </StyledMenuItem>
          ))}
          <StyledMenuItem bottom={0}>
            Menu
          </StyledMenuItem>
        </StyledMenu>

      </div>
    );
  }
}

const mapStateToProps = createSelector(
  getSidebarType,
  (sidebarType) => ({
    sidebarType,
  })
)
const mapDispatchToProps = Object.assign({showSidebar});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);