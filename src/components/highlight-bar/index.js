import React from 'react';
import styled from 'styled-components';
import HighlightIcon from 'react-icons/lib/md/mode-edit';
import NoteIcon from 'react-icons/lib/md/mode-comment';
import CaretIcon from 'react-icons/lib/md/arrow-drop-down';

const StyledHighlightBar = styled.div`
  position: absolute;
  bottom: 100%;
  left: -75px;
  margin-bottom: 0.5em;
  color: #fff;
  padding: 0.25em;
  background: rgba(20,20,20,.95);
  border-radius: 0.5em;
  display: flex;
  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-top-color: rgba(0,0,0,.95);
    border-width: 0.25em;
    margin-left: -0.25em;
  }
`;

const StyledButton = styled.div`
  cursor: pointer;
  background: rgba(255,255,255,0);
  transition: background 0.3s;
  padding: 0.25em;
  border-radius: 5px;
  &:hover {
    background: rgba(255,255,255,.2);
  }
`;

const StyledIcons = styled.div`
  display: flex;
  padding-right: 0.25em;
  border-right: 1px solid rgba(255,255,255,0.5);
`;

const StyledGuide = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  white-space: nowrap;
  cursor: pointer;
  background: rgba(255,255,255,0);
  transition: background 0.3s;
  padding: 0.25em;
  padding-left: 0.5em;
  margin-left: 0.25em;
  border-radius: 5px;
  &:hover {
    background: rgba(255,255,255,.2);
  }
`;

class HighlightBar extends React.Component {

  render() {
    return (
      <StyledHighlightBar>
        <StyledIcons>
          <StyledButton><HighlightIcon /></StyledButton>
          <StyledButton><NoteIcon /></StyledButton>
        </StyledIcons>
        <StyledGuide>Default Guide <CaretIcon /></StyledGuide>
      </StyledHighlightBar>
    )
  }
}

export default HighlightBar;