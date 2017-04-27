import * as types from './action-types';
import { getScripturesCache } from './selectors';



export function setScripturesCache(key, rawJson) {
  return {
    type: types.SET_SCRIPTURES_CACHE,
    payload: {
      json: rawJson,
      key,
    },
  }
}

const fetching = {};
export function fetchBook(work, book) {
  const key = `${work}/${book}`;
  return (dispatch, getState) => {
    const book = getScripturesCache(getState())[key];
    if(!book && !fetching[name]) {
      fetching[name] = true;
      fetch(`https://raw.githubusercontent.com/keslert/Scriptures/master/json/${key}.json`)
      .then(response => response.text())
      .then(response => dispatch(setScripturesCache(key, response)))
    }
  }
}