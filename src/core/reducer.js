import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { scripturesReducer } from './scriptures';
import { sidebarReducer } from './sidebar';

const rootReducer = combineReducers({
  ui: uiReducer,
  scriptures: scripturesReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
