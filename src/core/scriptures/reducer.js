import * as types from './action-types';

export const ScripturesState = () => ({
  cache: {},
});

export function scripturesReducer(state = ScripturesState(), {payload, type}) {
  switch (type) {
    case types.SET_SCRIPTURES_CACHE:
      return Object.assign({}, state, { cache: {...state.cache,
        [payload.key]: payload.json
      }});

    default: 
      return state;

  }
}


