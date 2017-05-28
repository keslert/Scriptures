import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { ScripturesState } from '../scriptures/reducer';
import { UiState } from '../ui/reducer';
import { getActive } from '../ui';
import { fetchBook } from '../scriptures';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      autoRehydrate(),
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  
  persistStore(store, {
    whitelist: ['scriptures', 'ui'],
    transforms: [
      immutableTransform({
        records: [ScripturesState, UiState],
        whitelist: ['scriptures', 'ui']
      })
    ]
  }, () => {
    const active = getActive(store.getState());
    store.dispatch(fetchBook(active.work, active.book));
  });

  return store;
}
