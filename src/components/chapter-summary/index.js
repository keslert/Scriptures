import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import Page from './page';
import theme from '../../styles/theme';
import tinycolor from 'tinycolor2';

import { getReadingMode, setReadingMode } from '../../core/ui';

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
`
StyledButton.defaultProps = {
  color: theme.grey,
}

const ChapterSummary = ({
  pages,
  readingMode,
  setReadingMode,
}) => {
  return (
    <StyledChapterSummary>
      <StyledDetails>
        <div>1 Nephi 1</div>
        <div>34 Verses</div>
        <div>Page 308</div>
        <div>Book of Mormon</div>
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
          <div key={i}>
            <Page {...page} readingMode={readingMode} />
          </div>
        )}
      </StyledPageIcons>
    </StyledChapterSummary>
  )
}

const mapStateToProps = createSelector(
  getReadingMode,
  (readingMode) => ({
    readingMode,
  })
)

const mapDispatchToProps = Object.assign({setReadingMode});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterSummary);