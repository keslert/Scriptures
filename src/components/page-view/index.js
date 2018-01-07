import React from 'react';
import styled from 'styled-components';
import Page from './page';
import { FadeIn } from '../../styles/animations';

const StyledPageView = styled.div`
  height: 100%;
  font-size: ${props => props.fontSize}px;
  animation: ${FadeIn} 300ms ease-out forwards;
`;

const PageView = ({
  page,
  fontSize,
}) => {
  return (
    <StyledPageView fontSize={fontSize}>
      <Page {...page} />
    </StyledPageView>
  )
}
export default PageView;