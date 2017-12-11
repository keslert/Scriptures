import * as types from './action-types';

export const uiState = () => ({
  readingMode: 'page',
  hoveredVerse: null,
  mousedDownWord: null,
  mouseDown: null,
  selectedRange: null,
});

export function uiReducer(state = uiState(), {payload, type}) {
  switch (type) {
    
    case types.SET_READING_MODE:
      return Object.assign({}, state, { readingMode: payload });

    case types.SET_HOVERED_VERSE:
      return Object.assign({}, state, { hoveredVerse: payload });

    case types.ON_HOVERED_WORD:
      if(state.mousedDownWord) {
        const reversed = payload.wordIndex < state.mousedDownWord.wordIndex;
        return Object.assign({}, state, { 
          selectedRange: reversed 
            ? {start: payload, end: state.mousedDownWord} 
            : {start: state.mousedDownWord, end: payload}
        })
      }
      return state;

    case types.ON_MOUSED_DOWN_WORD:
      return Object.assign({}, state, {
        mousedDownWord: payload,
        selectedRange: payload ? { start: payload, end: payload } : null
      });

    case types.ON_MOUSE_UP:
      return Object.assign({}, state, {
        mousedDownWord: null,
      })

    default: 
      return state;

  }
}