import React from 'react';
import styled from 'styled-components';
import Column from '../column';
import theme from '../../../styles/theme';

const StyledPage = styled.span`
  display: flex;
  justify-content: center;
  margin-right: 15px;
  
  cursor: pointer;
  ${props => props.hover && `
    &:hover {
      .verse {
        background: ${theme.grey};
      }
    }
  `};
`

const Page = ({
  columns,
  readingMode,
}) => (
  <StyledPage hover={readingMode === 'page'}>
    {columns.map((column, i) => 
      <Column key={i} {...column} readingMode={readingMode} />
    )}
  </StyledPage>
)
export default Page;