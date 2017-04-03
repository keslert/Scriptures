import * as types from './action-types';
import { Record } from 'immutable'

import { filter } from 'lodash';

export const uiState = new Record({
  readingMode: 'verse',
  active: {
    work: 'book-of-mormon',
    book: '1-nephi',
    chapter: 1,
    verse: 0,
    page: 0,
  },
  hoveredVerse: null,
}, 'uiState');

export function uiReducer(state = uiState(), {payload, type}) {
  switch (type) {
    case types.SET_ACTIVE:
      return state.set('active', payload);

    case types.SET_READING_MODE:
      return state.set('readingMode', payload);

    case types.SET_HOVERED_VERSE:
      return state.set('hoveredVerse', payload);

    default: 
      return state;

  }
}