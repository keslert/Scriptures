import React from 'react';
import styled from 'styled-components';
import Verse from '../page-view/verse';
import { FadeIn } from '../common/styled-animations';
import { Subhead } from 'rebass'

const StyledVerseView = styled.div`
  height: 100%;
  font-size: 25px;
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
}) => {

  return (
    <StyledVerseView key={label}>
      <Verse {...verse} />
      <Subhead color="secondaryDark" fs={3}>
        {label}
      </Subhead>
    </StyledVerseView>
  )
}
export default VerseView;