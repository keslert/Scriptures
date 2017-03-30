import React from 'react';
import styled from 'styled-components';
import Page from '../page';

import Slider from 'react-slick';

const StyledChapter = styled.div`
  
`

const Chapter = ({
  pages,
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
    <StyledChapter>
      <Slider {...settings}>
        {pages.map((page, i) =>
          <div key={i}>
            <Page {...page} />
          </div>
        )}
      </Slider>
    </StyledChapter>
  )
}
export default Chapter;