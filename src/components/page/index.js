import React from 'react';
import styled from 'styled-components';
import Column from '../column';

const StyledPage = styled.span`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const Page = ({
  columns,
}) => (
  <StyledPage>
    {columns.map((column, i) => 
      <Column key={i} {...column} />
    )}
  </StyledPage>
)
export default Page;