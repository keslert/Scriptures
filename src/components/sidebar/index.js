import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { StyledSidebar } from './styled';
import { getSidebarType, showSidebar } from '../../core/sidebar'

import BookmarksSidebar from './bookmarks-sidebar';

import * as types from '../../core/sidebar/sidebar-types';
import { map, values } from 'lodash';

const StyledMenu = styled.div`
  position: fixed;
  bottom: 14px;
  right: 25px;
  font-weight: bold;
  ${props => `
    ${props.hidden && 'opacity: 0'};

    .item {
      transition: all 0.3s ease-out;
      ${!props.expanded && 'bottom: 0;'};
      opacity: ${props.expanded ? 1 : 0};
    }
    
  `}
`

const StyledMenuItem = styled.div`
  position: absolute;
  right: 0;
  bottom: ${props => props.bottom}px;
  cursor: pointer;
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
    component: BookmarksSidebar,
  },
  [types.CHAINS_SIDEBAR]: {
    key: types.CHAINS_SIDEBAR,
    label: 'Chains',
    component: BookmarksSidebar,
  },
}

class Sidebar extends React.Component {

  constructor() {
    super();
    this.state = {
      menuExpanded: false,
    };
  }

  toggleMenu() {
    this.setState({menuExpanded: !this.state.menuExpanded})
  }

  render() {
    const { menuExpanded } = this.state;
    const { sidebarType, showSidebar } = this.props;
    const sidebar = sidebars[sidebarType]

    const open = !!sidebar;
    return (
      <div>
        <StyledSidebar open={open}>
          {open && <sidebar.component />}
        </StyledSidebar>

        <StyledMenu hidden={open} expanded={menuExpanded}>
          {map(values(sidebars), (sidebar, i) => (
            <StyledMenuItem 
              key={i}
              className="item" 
              bottom={(i + 1) * 30} 
              onClick={() => { 
                if(menuExpanded) {
                  showSidebar(sidebar.key); 
                  this.toggleMenu();
                }
              }}>
              {sidebar.label}
            </StyledMenuItem>
          ))}
          <StyledMenuItem bottom={0} onClick={() => this.toggleMenu()}>
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