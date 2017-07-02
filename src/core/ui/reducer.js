import * as types from './action-types';
import { Record } from 'immutable'

export const UiState = new Record({
  readingMode: 'page',
  bookmarks: [{
    work: 'book-of-mormon',
    book: '1-nephi',
    chapter: 0,
    verse: 0,
    page: 0,
    lastModified: new Date(),
  }],
  activeBookmark: 0,
  hoveredVerse: null,
  mousedDownWord: null,
  mouseDown: null,
  selectedRange: null,
}, 'uiState');

function updateBookmark(bookmarks, index, changes) {
  return [
    ...bookmarks.slice(0, index),
    Object.assign({}, bookmarks[index], changes),
    ...bookmarks.slice(index + 1)
  ]
}

export function uiReducer(state = UiState(), {payload, type}) {
  switch (type) {

    case types.ADD_BOOKMARK:
      return state.set('bookmarks', [
        ...state.bookmarks,
        UiState().bookmarks[0]
      ])

    case types.SET_ACTIVE_BOOKMARK:
      return state.set('activeBookmark', payload);

    case types.SET_ACTIVE:
      return state.set('bookmarks', updateBookmark(state.bookmarks, state.activeBookmark, payload));
    
    case types.SET_ACTIVE_CHAPTER:
      return state.set('bookmarks', updateBookmark(state.bookmarks, state.activeBookmark, {chapter: payload}));
    
    case types.SET_ACTIVE_PAGE:
      return state.set('bookmarks', updateBookmark(state.bookmarks, state.activeBookmark, {page: payload}));
    
    case types.SET_ACTIVE_VERSE:
      return state.set('bookmarks', updateBookmark(state.bookmarks, state.activeBookmark, {verse: payload}));

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