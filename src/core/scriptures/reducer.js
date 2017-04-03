import * as types from './action-types';
import { Record } from 'immutable'

import { filter } from 'lodash';

export const ScripturesState = new Record({
  bookOfMormon: ['1 Nephi','2 Nephi','Jacob','Enos','Jarom','Omni','Words of Mormon','Mosiah','Alma','Helaman','3 Nephi','4 Nephi','Mormon','Ether','Moroni'],
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


