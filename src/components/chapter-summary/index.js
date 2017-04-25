import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import Page from './page';
import theme from '../../styles/theme';
import tinycolor from 'tinycolor2';

import Cascader from 'rc-cascader';

import { range, map } from 'lodash';
import { capitalize } from '../../core/utils';
import { getActive, getReadingMode, setReadingMode, setActive } from '../../core/ui';
import { scriptures } from '../../core/scriptures/utils';

const StyledChapterSummary = styled.div`
  display: flex;
  align-items: center;
`

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  color: ${theme.secondary};
  text-align: right;
  > div {
    outline: none;
  }
`

const StyledPageIcons = styled.div`
  display: flex;
`

const StyledMode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`

const StyledButton = styled.div`
  width: 40px;
  font-size: 0.7em;
  text-align: center;
  padding: 2px;
  border-radius: 9px;
  cursor: pointer;
  margin: 2px;
  ${props => `
    border: 1px solid ${tinycolor(props.color).lighten(10).toString()};
    color: ${props.color};
    &:hover {
      background: #fafafa;
    }
  `}
`;
StyledButton.defaultProps = {
  color: theme.grey,
}

const StyledLabel = styled.div`
  padding: 3px 6px;
  outline: none;
  ${props => props.hover && `
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      background: ${theme.lightGrey};
    }
  `}
`

const ChapterSummary = ({
  work,
  book,
  chapter,
  verses,
  pages,
  readingMode,
  setReadingMode,
  setActive,
}) => {


  const options = map(scriptures, work => ({
    label: capitalize(work.name),
    value: work.name,
    children: map(work.books, book => ({
      label: capitalize(book.name),
      value: book.name,
      children: range(0, book.chapters).map(i => ({
        label: i + 1,
        value: i,
      }))
    }))
  }))

  const onChange = (value) => {
    const work = value[0];
    const book = value[1];
    const chapter = value[2];
    setActive({work, book, chapter, page: 0, verse: 0});
  }

  return (
    <StyledChapterSummary>
      <StyledDetails>
        <Cascader options={options} dropdownMenuColumnStyle={{width: 140}} onChange={onChange}>
          <StyledLabel hover>{capitalize(book)} {chapter + 1}</StyledLabel>
        </Cascader>
        <StyledLabel>{verses.length} Verses</StyledLabel>
      </StyledDetails>

      <StyledMode>
        {['page', 'verse'].map(mode => (
          <StyledButton key={mode} color={readingMode === mode ? theme.secondary : undefined} onClick={() => setReadingMode(mode)}>
            {mode}
          </StyledButton>
        ))}
      </StyledMode>

      <StyledPageIcons>
        {pages.map((page, i) =>
          <Page key={i} {...page} readingMode={readingMode} page={i} />
        )}
      </StyledPageIcons>
    </StyledChapterSummary>
  )
}

const mapStateToProps = createSelector(
  getActive,
  getReadingMode,
  (active, readingMode) => ({
    work: active.work,
    book: active.book,
    chapter: active.chapter,
    readingMode,
  })
)

const mapDispatchToProps = Object.assign({setReadingMode, setActive});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterSummary);