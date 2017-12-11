import { createSelector } from 'reselect';
import { getActiveBookmark } from '../bookmarks/selectors';
import { parseBook } from './parse';

export function getScriptures(state) {
  return state.scriptures;
}

export function getScripturesCache(state) {
  return getScriptures(state).cache;
}

export const getActiveBook = createSelector(
  getScripturesCache,
  getActiveBookmark,
  (cache, active) => {
    const rawJson = cache[`${active.work}/${active.book}`];
    if(rawJson) {
      return parseBook(rawJson);
    }
    return null;
  }
)

export const getActiveChapter = createSelector(
  getActiveBook,
  getActiveBookmark,
  (book, bookmark) => {
    if(book) {
      return book.chapters[bookmark.chapter];
    }
    return null;
  }
)