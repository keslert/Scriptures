import React from 'react';
import styled from 'styled-components';
import Page from '../page';

const StyledChapter = styled.span`
  
`

const Chapter = ({
  pages,
}) => (
  <StyledChapter>
    {pages.map((page, i) => 
      <Page key={i} {...page} />
    )}
  </StyledChapter>
)
export default Chapter;