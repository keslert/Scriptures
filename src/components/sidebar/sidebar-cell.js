import React from 'react';
import styled from 'styled-components';
import EllipsisIcon from 'react-icons/lib/fa/ellipsis-h';

const StyledCell = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background: #fff;
  font-size: 0.9em;
  &:hover {
    cursor: pointer;
    background: #fbfbfb;
    .showOnHover {
      opacity: 1;
    }
  }
`;

const StyledContent = styled.div`
  flex: 1;
  padding: 10px 10px;
`;

const StyledEllipsis = styled.div`
  padding: 4px;
  opacity: 0;
  color: #ccc;
  &:hover {
    color: #aaa;
  }
  align-self: center;
`

class SidebarCell extends React.PureComponent {

  renderMenu() {
    const { menu } = this.props;
    if(menu) {
      return (
        <StyledEllipsis className="showOnHover">
          <EllipsisIcon />
        </StyledEllipsis>
      )
    }
  }

  render() {
    const { onClick, children } = this.props;
    return (
      <StyledCell onClick={onClick}>
        <StyledContent>
          {children}
        </StyledContent>
        {this.renderMenu()}
      </StyledCell>
    )
  }
}

export default SidebarCell;