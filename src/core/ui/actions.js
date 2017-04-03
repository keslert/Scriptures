import * as types from './action-types';
import { getReadingMode, getActive } from './selectors'

export function setReadingMode(mode) {
  return {
    type: types.SET_READING_MODE,
    payload: mode,
  }
}

export function setActive(active) {
  return {
    type: types.SET_ACTIVE,
    payload: active,
  }
}

export function setHoveredVerse(verse) {
  return {
    type: types.SET_HOVERED_VERSE,
    payload: verse,
  }
}

export function advance() {
  return (dispatch, getState) => {
    const state = getState();
    const readingMode = getReadingMode(state);
    const active = getActive(state);
    // const chapter = 

  }
}