import React from 'react';
import styled from 'styled-components';
import Verse from '../page-view/verse';
import { FadeIn } from '../../styles/animations';
import { Subhead } from 'rebass'

const StyledVerseView = styled.div`
  height: 100%;
  font-size: ${props => props.fontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  animation: ${FadeIn} 300ms ease-out forwards;
`

const VerseView = ({
  verse,
  label,
  fontSize,
}) => {

  return (
    <StyledVerseView key={label} fontSize={fontSize}>
      <Verse {...verse} />
      <Subhead color="secondaryDark" f='1em' children={label} />
    </StyledVerseView>
  )
}
export default VerseView;