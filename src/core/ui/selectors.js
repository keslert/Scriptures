import { createSelector } from 'reselect';

export function getUI(state) {
  return state.ui;
}

export function getReadingMode(state) {
  return getUI(state).readingMode;
}

export function getBookmarks(state) {
  return getUI(state).bookmarks;
}

export function getActive(state) {
  const ui = getUI(state);
  return ui.bookmarks[ui.activeBookmark];
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

function _getSelectedRange(state) {
  return getUI(state).selectedRange;
}

export function isVerseHovered(state, props) {
  return getHoveredVerse(state) === props.verse;
}

export function isVerseActive(state, props) {
  return getActive(state).verse === Number.parseInt(props.verse, 10);
}

export function isPageActive(state, props) {
  return getActive(state).page === Number.parseInt(props.pageIndex, 10);
}

export const getSelectedRange = createSelector(
  _getSelectedRange,
  (selectedRange) => {
    if(selectedRange) {
      return selectedRange.toJS();
    }
  }
)