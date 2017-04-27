import * as types from './action-types';
import { Record } from 'immutable'

export const UiState = new Record({
  readingMode: 'page',
  active: {
    work: 'new-testament',
    book: 'mark',
    chapter: 0,
    verse: 0,
    page: 0,
  },
  
  hoveredVerse: null,
  mousedDownWord: null,
  selectedRange: null,
}, 'uiState');

export function uiReducer(state = UiState(), {payload, type}) {
  switch (type) {
    case types.SET_ACTIVE:
      return state.set('active', Object.assign({}, state.active, payload));
    
    case types.SET_ACTIVE_BOOK:
      return state.set('active', {...state.active, book: payload});

    case types.SET_ACTIVE_CHAPTER:
      return state.set('active', {...state.active, chapter: payload});
    
    case types.SET_ACTIVE_PAGE:
      return state.set('active', {...state.active, page: payload});
    
    case types.SET_ACTIVE_VERSE:
      return state.set('active', {...state.active, verse: payload});

    case types.SET_READING_MODE:
      return state.set('readingMode', payload);

    case types.SET_HOVERED_VERSE:
      return state.set('hoveredVerse', payload);

    case types.ON_HOVERED_WORD:
      if(state.mousedDownWord) {
        const reversed = payload.wordIndex < state.mousedDownWord.get('wordIndex');
        return state.merge({
          selectedRange: reversed 
            ? {start: payload, end: state.mousedDownWord} 
            : {start: state.mousedDownWord, end: payload}
        })
      }
      return state;

    case types.ON_MOUSED_DOWN_WORD:
      return state.merge({
        mousedDownWord: payload,
        selectedRange: payload 
        ? { start: payload, end: payload }
        : null
      });

    case types.ON_MOUSE_UP:
      return state.merge({
        mousedDownWord: null,
      })
    

    default: 
      return state;

  }
}