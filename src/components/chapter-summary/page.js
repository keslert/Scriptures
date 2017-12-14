import React from 'react';
import styled from 'styled-components';
import Column from './column';

class Page extends React.PureComponent {

  render() {
    const { bookmark, page, readingMode, onClick } = this.props;

    const isPageMode = readingMode === 'page';
    return (
      <SPage 
        canHover={isPageMode}
        isActive={isPageMode && page.pageIndex === bookmark.page}
        onClick={() => isPageMode && onClick(page)}
        >
        {page.columns.map((column, i) =>
          <Column
            key={i}
            column={column}
            readingMode={readingMode}
            bookmark={bookmark}
            onClick={onClick}
            />
        )}
      </SPage>
    )
  }
}

export default Page;

const SPage = styled.span`
  display: flex;
  justify-content: center;
  margin-right: 0.4em;
  
  cursor: pointer;
  ${props => `
    ${props.canHover && `
      &:hover {
        .verse {
          background: ${props.theme.colors.secondaryLight};
        }
      }
    `};
    ${props.isActive && `
      .verse {
        background: ${props.theme.colors.secondaryLight};
      }
    `};
  `};
`