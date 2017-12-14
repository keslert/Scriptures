import * as types from './action-types';
import { getReadingMode } from './selectors'

export function setReadingMode(mode) {
  return (dispatch, getState) => {
    const currentMode = getReadingMode(getState());
    if(currentMode === 'verse' && mode === 'page') {
      // 
    } else if(currentMode === 'page' && mode === 'verse') {
      //
    }

    dispatch({
      type: types.SET_READING_MODE,
      payload: mode,
    })
  }
}

export function setHoveredVerse(verse) {
  return {
    type: types.SET_HOVERED_VERSE,
    payload: verse,
  }
}

export function onHoveredWord(word) {
  return {
    type: types.ON_HOVERED_WORD,
    payload: word,
  }
}

export function onMousedDownWord(word) {
  return {
    type: types.ON_MOUSED_DOWN_WORD,
    payload: word,
  }
}

export function onMouseUp() {
  return {
    type: types.ON_MOUSE_UP,
  }
}