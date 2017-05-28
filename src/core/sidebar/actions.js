import * as types from './action-types';

export function showSidebar(type) {
  return {
    type: types.SHOW_SIDEBAR,
    sidebarType: type,
  };
}

export function hideSidebar() {
  return {
    type: types.HIDE_SIDEBAR,
  }
}