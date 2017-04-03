import React from 'react';
import styled from 'styled-components';
import Page from './page';

const StyledPageView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const PageView = ({
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
    <StyledPageView>
      <Page {...pages[0]} />
    </StyledPageView>
  )
}
export default PageView;