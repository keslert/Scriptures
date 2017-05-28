import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import theme from '../../styles/theme';
import CloseIcon from 'react-icons/lib/md/close';
import { hideSidebar } from '../../core/sidebar';

const StyledHeading = styled.div`
  display: flex;
  font-size: 12px;
`;

const StyledClose = styled.div`
  margin-right: 5px;
  align-self: center;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  flex: 1;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
`;

class SidebarHeading extends React.PureComponent {
  renderBack() {
    return null;
  }

  renderClose() {
    const { hideSidebar } = this.props;

    return (
      <StyledClose onClick={hideSidebar}>
        <CloseIcon />
      </StyledClose>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <StyledHeading>
        {this.renderBack()}
        <StyledTitle>{children}</StyledTitle>
        {this.renderClose()}
      </StyledHeading>
    )
    
  }
}

const mapDispatchToProps = {
  hideSidebar,
}

export default connect(undefined, mapDispatchToProps)(SidebarHeading);