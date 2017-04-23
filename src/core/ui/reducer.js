import * as types from './action-types';
import { Record } from 'immutable'

export const UiState = new Record({
  readingMode: 'page',
  active: {
    work: 'book-of-mormon',
    book: 'alma',
    chapter: 0,
    verse: 0,
    page: 0,
  },
  hoveredVerse: null,
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

    default: 
      return state;

  }
}