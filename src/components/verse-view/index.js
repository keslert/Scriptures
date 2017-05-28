import React from 'react';
import styled from 'styled-components';
import Verse from '../page-view/verse';
import theme from '../../styles/theme';
import { FadeIn } from '../common/styled-animations';

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

const StyledTitle = styled.div`
  margin-top: 1em;
  color: ${theme.secondary};
  font-size: 0.9em;
  font-family: 'Lusitana';
`

const VerseView = ({
  verse,
  label,
}) => {

  return (
    <StyledVerseView key={label}>
      <Verse {...verse} />
      <StyledTitle>
        {label}
      </StyledTitle>
    </StyledVerseView>
  )
}
export default VerseView;