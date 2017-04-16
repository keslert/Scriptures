import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { ScripturesState } from '../scriptures/reducer';
import { UiState } from '../ui/reducer';

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
  
  // persistStore(store, {
  //   whitelist: ['scriptures', 'ui'],
  //   transforms: [
  //     immutableTransform({
  //       records: [ScripturesState, UiState],
  //       whitelist: ['scriptures', 'ui']
  //     })
  //   ]
  // });

  return store;
}
