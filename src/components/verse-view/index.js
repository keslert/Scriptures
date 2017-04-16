import React from 'react';
import styled from 'styled-components';
import Verse from '../page-view/verse';
import theme from '../../styles/theme';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const StyledVerseView = styled.div`
  height: 100%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.div`
  margin-top: 1em;
  color: ${theme.primary};
  font-size: 0.9em;
  font-family: 'Lusitana';
  &:before {
    content: '';
    width: 10px;
    height: 2px;
    background: ${theme.primary};
  }
`

const VerseView = ({
  verse,
  label,
}) => {

  return (
    <CSSTransitionGroup
      transitionName="t1"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      <StyledVerseView key={label}>
        <Verse {...verse} />
        <StyledTitle>
          {label}
        </StyledTitle>
      </StyledVerseView>
    </CSSTransitionGroup>
  )
}
export default VerseView;