import React from 'react';
import styled from 'styled-components';
import LogoSVG from './svg/logo';

const StyledLogo = styled.div`
  font-weight: bold;
  svg {
    margin-right: 5px;
    font-size: 0.8em;
  }
`

const Logo = () => (
  <StyledLogo>
    <LogoSVG color='#ccc'/>
    Study Scriptures
  </StyledLogo>
)
export default Logo;