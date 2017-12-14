import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const _Popover = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  zIndex: 2;
`;

const _Relative = styled.div`
  position: relative;
`;

const _Menu = styled.div`
  background: ${props => props.theme.colors.dark_shade};
  box-shadow: 0 2px 3px rgba(0,0,0,0.5);
  font-size: 13px;
  font-weight: normal;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`

const _MenuItem = styled.div`
  padding: 8px 16px;
  color: ${props => props.theme.colors.white};
  white-space: nowrap;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  &:hover {
    background: rgba(255,255,255,0.05);
  }
`

const _MenuSpacer = styled.div`
  height: 3px;
  background: rgba(255,255,255,0.1);
`

class Dropdown extends React.Component {

  constructor(props) {
    super();
    this.state = {
      display: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ display: !this.state.display });
  }

  handleClose() {
    this.setState({ display: false });
  }

  renderDropdown() {
    const { menu } = this.props;

    if(this.state.display) {
      return (
        <_Popover>
          <_Cover onClick={this.handleClose}/>
          <_Menu>
            {menu.map((m, i) => 
              m.spacer 
              ? <_MenuSpacer key={i} />
              : <_MenuItem key={i} onClick={() => this.handleClose() || m.onClick()}>
                  {m.label}
                </_MenuItem>
            )}
          </_Menu>
        </_Popover>
      );
    }
  }

  render() {

    return (
      <_Relative>
        <div onClick={this.handleClick}>
          {this.props.children}
        </div>
        {this.renderDropdown()}
      </_Relative>
    );
  }
}

Dropdown.propTypes = {
  menu: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};

export default Dropdown;