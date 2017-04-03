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

export function fetchBook(name) {
  const key = name.toLowerCase().replace(/ /g, '-');
  return (dispatch, getState) => {
    const book = getScripturesCache(getState())[key];
    if(!book) {
      fetch(`https://raw.githubusercontent.com/keslert/Scriptures/master/json/${key}.json`)
      .then(response => response.text())
      .then(response => dispatch(setScripturesCache(key, response)))
      // .catch(error => console.log(error));
    }
  }
}