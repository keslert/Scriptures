import * as types from './action-types';

const sidebarState = () => ({
  sidebarType: null,
})

export function sidebarReducer(state = sidebarState(), action) {
  switch (action.type) {
    case types.SHOW_SIDEBAR:
      return Object.assign({}, state, {
        sidebarType: action.sidebarType,
      });
    case types.HIDE_SIDEBAR:
      return sidebarState();
    default:
      return state
  }
}