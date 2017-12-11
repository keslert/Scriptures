import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { scripturesReducer } from './scriptures';
import { sidebarReducer } from './sidebar';
import { bookmarksReducer } from './bookmarks';

const rootReducer = combineReducers({
  ui: uiReducer,
  scriptures: scripturesReducer,
  sidebar: sidebarReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;
