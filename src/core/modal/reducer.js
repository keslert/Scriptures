import * as types from './action-types';

const modalState = () => ({
  modalType: null,
  modalProps: {}
})

export function modalReducer(state = modalState(), action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return Object.assign({}, state, {
        modalType: action.modalType,
        modalProps: action.modalProps
      });
    case types.HIDE_MODAL:
      return modalState();
    default:
      return state
  }
}