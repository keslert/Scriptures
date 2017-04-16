import * as types from './action-types';
import { Record } from 'immutable'

export const ScripturesState = new Record({
  cache: {},
}, 'ScripturesState');

export function scripturesReducer(state = ScripturesState(), {payload, type}) {
  switch (type) {
    case types.SET_SCRIPTURES_CACHE:
      return state.set('cache', {...state.cache,
        [payload.key]: payload.json
      });

    default: 
      return state;

  }
}


