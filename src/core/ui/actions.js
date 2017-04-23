import * as types from './action-types';
import { getReadingMode, getActive } from './selectors'
import { getActiveBook, getActiveChapter } from '../scriptures';
import { getNextBook, getPreviousBook } from '../scriptures/utils';

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

export function setActiveBook(book) {
  return {
    type: types.SET_ACTIVE_BOOK,
    payload: book,
  }
}

export function setActiveChapter(chapter) {
  return {
    type: types.SET_ACTIVE_CHAPTER,
    payload: chapter,
  }
}

export function setActivePage(page) {
  return {
    type: types.SET_ACTIVE_PAGE,
    payload: page,
  }
}

export function setActiveVerse(verse) {
  return {
    type: types.SET_ACTIVE_VERSE,
    payload: verse,
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
    const chapter = getActiveChapter(state);

    if(readingMode === 'verse') {
      if(active.verse < chapter.verses.length - 1) {
        dispatch(setActiveVerse(active.verse + 1));
      } else {
        dispatch(advanceChapter());
      }
    } else if(readingMode === 'page') {
      if(active.page < chapter.pages.length - 1) {
        dispatch(setActivePage(active.page + 1));
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
    const active = getActive(state);

    if(readingMode === 'verse') {
      if(active.verse > 0) {
        dispatch(setActiveVerse(active.verse - 1));
      } else {
        dispatch(previousChapter(true));
      }
    } else if(readingMode === 'page') {
      if(active.page > 0) {
        dispatch(setActivePage(active.page - 1));
      } else {
        dispatch(previousChapter(true));
      }
    }
  }
}

export function advanceChapter() {
  return (dispatch, getState) => {
    const state = getState();
    const active = getActive(state);
    const book = getActiveBook(state);

    if(active.chapter < book.chapters.length - 1) {
      dispatch(setActive({...active,
        verse: 0,
        page: 0,
        chapter: active.chapter + 1
      }))
    } else {
      const nextBook = getNextBook(active.book)
      if(nextBook) {
        dispatch(setActive({...active,
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
    const active = getActive(state);
    const book = getActiveBook(state);

    if(active.chapter > 0) {
      const chapter = book.chapters[active.chapter - 1];
      dispatch(setActive({...active,
        verse: startAtEnd ? chapter.verses.length - 1 : 0,
        page: startAtEnd ? chapter.pages.length - 1 : 0,
        chapter: active.chapter - 1,
      }))
    } else {
      const prevBook = getPreviousBook(active.book)
      if(prevBook) {
        dispatch(setActive({...active,
          book: prevBook.name,
          chapter: prevBook.chapters - 1,
          page: 0,
          verse: 0,
        }))
      }
    }
  }
}

