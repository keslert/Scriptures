import React from 'react';
import styled from 'styled-components';
import Logo from '../common/logo'

import { StyledAbsolute } from '../common/styled-base';

import ChapterSummary from '../chapter-summary';

const StyledToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 5px 20px;
  box-sizing: border-box;
`

const Toolbar = ({
  chapter
}) => {
  return (
    <StyledToolbar>
      <StyledAbsolute left="20px" bottom="15px">
        <Logo />
      </StyledAbsolute>
      
      {chapter && <ChapterSummary {...chapter} />}
      
      <StyledAbsolute right="20px" bottom="15px">
        
      </StyledAbsolute>
    </StyledToolbar>
  )
}
export default Toolbar;