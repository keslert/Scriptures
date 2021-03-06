import {createStore, applyMiddleware, compose} from 'redux';
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
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  
  persistStore(store, {
    whitelist: ['scriptures', 'ui', 'bookmarks'],
  }, () => {
    const bookmark = getActiveBookmark(store.getState());
    store.dispatch(fetchBook(bookmark.work, bookmark.book));
  });

  return store;
}
