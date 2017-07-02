import React from 'react';
import styled from 'styled-components';
import PenIcon from 'react-icons/lib/ti/pen';

const StyledHighlightBar = styled.span`
  position: absolute;
  bottom: 100%;
  left: -50px;
  margin-bottom: 0.5em;
  color: #fff;
  padding: 0.5em;
  width: 100px;
  background: rgba(0,0,0,.95);
  border-radius: 1em;
  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-top-color: rgba(0,0,0,.95);
    border-width: 0.25em;
    margin-left: -0.25em;
  }
`

class HighlightBar extends React.Component {

  render() {
    return (
      <StyledHighlightBar>
        <PenIcon />
      </StyledHighlightBar>
    )
  }
}

export default HighlightBar;