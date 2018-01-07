import { createSelector } from 'reselect'
import { getActiveBookmark } from '../bookmarks'

export function getUI(state) {
  return state.ui;
}

export function getReadingMode(state) {
  return getUI(state).readingMode;
}

export function getHoveredVerse(state) {
  return getUI(state).hoveredVerse;
}

export function getHoveredWord(state) {
  return getUI(state).hoveredWord;
}

export function getMousedDownWord(state) {
  return getUI(state).mousedDownWord;
}

export function getFontSizes(state) {
  return getUI(state).fontSizes;
}

function _getSelectedRange(state) {
  return getUI(state).selectedRange;
}

export function isVerseHovered(state, props) {
  return getHoveredVerse(state) === props.verse;
}

export function isVerseActive(state, props) {
  return getActiveBookmark(state).verse === Number.parseInt(props.verse, 10);
}

export function isPageActive(state, props) {
  return getActiveBookmark(state).page === Number.parseInt(props.pageIndex, 10);
}

export const getSelectedRange = createSelector(
  _getSelectedRange,
  (selectedRange) => {
    if(selectedRange) {
      return selectedRange.toJS();
    }
  }
)

export const getActiveFontSize = createSelector(
  getReadingMode,
  getFontSizes,
  (mode, fontSizes) => fontSizes[mode]
)