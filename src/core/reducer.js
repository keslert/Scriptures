import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { scripturesReducer } from './scriptures';

const rootReducer = combineReducers({
  ui: uiReducer,
  scriptures: scripturesReducer,
});

export default rootReducer;
