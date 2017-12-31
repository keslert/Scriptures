import React from 'react';
import styled from 'styled-components';
import Page from './page';
import { FadeIn } from '../../styles/animations';

const StyledPageView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  user-select: none;
  animation: ${FadeIn} 300ms ease-out forwards;
`;

const PageView = ({
  page,
}) => {
  return (
    <StyledPageView key={JSON.stringify(page)}>
      <Page {...page} />
    </StyledPageView>
  )
}
export default PageView;