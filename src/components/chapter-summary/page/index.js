import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import Column from '../column';
import theme from '../../../styles/theme';
import { setActivePage, isPageActive } from '../../../core/ui';

const StyledPage = styled.span`
  display: flex;
  justify-content: center;
  margin-right: 0.75em;
  
  cursor: pointer;
  ${props => props.hover && `
    &:hover {
      .verse {
        background: ${theme.grey};
      }
    }
  `};

  ${props => `
    ${props.active && `
      .verse {
        background: ${theme.grey};
      }
    `}
  `}
`

const Page = ({
  page,
  setActivePage,
  isActive,
  columns,
  readingMode,
}) => {

  const pageMode = readingMode === 'page';
  return (
    <StyledPage hover={pageMode} active={pageMode && isActive} onClick={() => setActivePage(page)}>
      {columns.map((column, i) => 
        <Column key={i} {...column} readingMode={readingMode} />
      )}
    </StyledPage>
  )
}

const mapStateToProps = createSelector(
  isPageActive,
  (isActive) => ({
    isActive,
  })
)

const mapDispatchToProps = Object.assign({setActivePage});
export default connect(mapStateToProps, mapDispatchToProps)(Page);