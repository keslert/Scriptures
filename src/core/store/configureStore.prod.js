import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import { ScripturesState } from '../scriptures/reducer';
import { getActiveBookmark } from '../bookmarks';
import { fetchBook } from '../scriptures';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      autoRehydrate(),
      applyMiddleware(thunk),
    )
  );
  
  persistStore(store, {
    whitelist: ['scriptures', 'ui'],
  }, () => {
    const bookmark = getActiveBookmark(store.getState());
    store.dispatch(fetchBook(bookmark.work, bookmark.book));
  });

  return store;
}
