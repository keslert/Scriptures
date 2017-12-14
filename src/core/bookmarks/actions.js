import * as types from './action-types';
import { getReadingMode } from '../ui';
import { getActiveBookmark } from './selectors';
import { getActiveChapter, getActiveBook } from '../scriptures';

import { 
  getNextBook, 
  getPreviousBook,
  getBookSummary,
} from '../scriptures/utils';


export function setActiveBookmark(index) {
  return {
    type: types.SET_ACTIVE_BOOKMARK,
    payload: index,
  }
}

export function addBookmark() {
  return {
    type: types.ADD_BOOKMARK
  }
}

export function updateBookmark(changes, optionalIndex) {
  return {
    type: types.UPDATE_BOOKMARK,
    payload: changes,
    index: optionalIndex,
  }
}

export function advance() {
  return (dispatch, getState) => {
    const state = getState();
    const readingMode = getReadingMode(state);
    const bookmark = getActiveBookmark(state);
    const chapter = getActiveChapter(state);

    if(readingMode === 'verse') {
      if(bookmark.verse < chapter.verses.length - 1) {
        dispatch(updateBookmark({verse: bookmark.verse + 1}));
      } else {
        dispatch(advanceChapter());
      }
    } else if(readingMode === 'page') {
      if(bookmark.page < chapter.pages.length - 1) {
        dispatch(updateBookmark({page: bookmark.page + 1}));
      } else {
        dispatch(advanceChapter());
      }
    }
  }
}

export function previous() {
  return (dispatch, getState) => {
    const state = getState();
    const readingMode = getReadingMode(state);
    const bookmark = getActiveBookmark(state);

    if(readingMode === 'verse') {
      if(bookmark.verse > 0) {
        dispatch(updateBookmark({verse: bookmark.verse - 1}));
      } else {
        dispatch(previousChapter(true));
      }
    } else if(readingMode === 'page') {
      if(bookmark.page > 0) {
        dispatch(updateBookmark({page: bookmark.page - 1}));
      } else {
        dispatch(previousChapter(true));
      }
    }
  }
}

export function advanceChapter() {
  return (dispatch, getState) => {
    const state = getState();
    const bookmark = getActiveBookmark(state);
    const book = getActiveBook(state);

    if(bookmark.chapter < book.chapters.length - 1) {
      dispatch(updateBookmark({...bookmark,
        verse: 0,
        page: 0,
        chapter: bookmark.chapter + 1
      }))
    } else {
      const nextBook = getNextBook(bookmark.work, bookmark.book)
      if(nextBook) {
        dispatch(updateBookmark({...bookmark,
          book: nextBook.name,
          chapter: 0,
          page: 0,
          verse: 0,
        }))
      }
    }
  }
}

export function previousChapter(startAtEnd) {
  return (dispatch, getState) => {
    const state = getState();
    const bookmark = getActiveBookmark(state);
    const book = getActiveBook(state);

    if(bookmark.chapter > 0) {
      const chapter = book.chapters[bookmark.chapter - 1];
      dispatch(updateBookmark({...bookmark,
        verse: startAtEnd ? chapter.verses.length - 1 : 0,
        page: startAtEnd ? chapter.pages.length - 1 : 0,
        chapter: bookmark.chapter - 1,
      }))
    } else {
      const prevBook = getPreviousBook(bookmark.work, bookmark.book)
      if(prevBook) {
        dispatch(updateBookmark({...bookmark,
          book: prevBook.name,
          chapter: prevBook.chapters - 1,
          page: 0, // TODO: We should try to set the page correctly...
          verse: 0, 
        }))
      }
    }
  }
}