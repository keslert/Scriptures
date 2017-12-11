export function getBookmarks(state) {
  return state.bookmarks;
}

export function getBookmarksList(state) {
  return getBookmarks(state).list;
}

export function getActiveBookmark(state) {
  const bookmarks = getBookmarks(state);
  return bookmarks.list[bookmarks.activeIndex];
}