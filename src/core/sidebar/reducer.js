import * as types from './action-types';

const SidebarState = () => ({
  sidebarType: null,
})

export function sidebarReducer(state = SidebarState(), action) {
  switch (action.type) {
    case types.SHOW_SIDEBAR:
      return Object.assign({}, state, {
        sidebarType: action.sidebarType,
      });
    case types.HIDE_SIDEBAR:
      return SidebarState();
    default:
      return state
  }
}