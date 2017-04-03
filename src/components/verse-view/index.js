import React from 'react';
import styled from 'styled-components';
import Verse from '../page-view/verse';
import theme from '../../styles/theme';

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
  book,
  chapter,
  verses,
}) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => console.log(index),
  };

  return (
    <StyledVerseView>
      <Verse {...verses[0]} />

      <StyledTitle>
        1 Nephi 1 : 1
      </StyledTitle>
    </StyledVerseView>
  )
}
export default VerseView;