import { createSelector } from 'reselect';
import { getActive } from '../ui/selectors';
import { parseBook } from './parse';
import { fetchBook } from './actions';

export function getScriptures(state) {
  return state.scriptures;
}

export function getScripturesCache(state) {
  return getScriptures(state).cache;
}

export const getActiveBook = createSelector(
  getScripturesCache,
  getActive,
  (cache, active) => {
    const rawJson = cache[active.book];
    if(rawJson) {
      return parseBook(rawJson);
    }
    return null;
  }
)

export const getActiveChapter = createSelector(
  getActiveBook,
  getActive,
  (book, active) => {
    if(book) {
      return book.chapters[active.chapter];
    }
    return null;
  }
)

export const getActivePage = createSelector(
  getActiveChapter,
  getActive,
  (chapter, active) => {
    if(chapter) {
      return chapter.pages[active.page];
    }
    return null;
  }
)

export const getActiveVerse = createSelector(
  getActiveChapter,
  getActive,
  (chapter, active) => {
    if(chapter) {
      return chapter.verses[active.verse];
    }
    return null;
  }
)