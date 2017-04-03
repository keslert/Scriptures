export function getUI(state) {
  return state.ui;
}

export function getReadingMode(state) {
  return getUI(state).readingMode;
}

export function getActive(state) {
  return getUI(state).active;
}

export function getHoveredVerse(state) {
  return getUI(state).hoveredVerse;
}

export function isVerseHovered(state, props) {
  return getHoveredVerse(state) === props.verse;
}

export function isVerseActive(state, props) {
  return getActive(state).verse === props.verse;
}