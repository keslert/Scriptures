import React from 'react';
import styled from 'styled-components';
import Page from './page';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const StyledPageView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const PageView = ({
  page,
}) => {
  return (
    <CSSTransitionGroup
      transitionName="t1"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={0}>
      <StyledPageView key={JSON.stringify(page)}>
        <Page {...page} />
      </StyledPageView>
    </CSSTransitionGroup>
  )
}
export default PageView;