import React from 'react';
import { connect } from 'react-redux';

import * as types from '../../core/modal/modal-types';
import BookmarkRenameModal from './bookmark/rename-modal';

const MODAL_COMPONENTS = {
  [types.BOOKMARK_RENAME_MODAL]: BookmarkRenameModal,
}

const RootModal = ({ 
  modalType, 
  modalProps 
}) => {
  if(!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return (
    <SpecificModal {...modalProps} />
  );
}

const mapStateToProps = state => state.modal;
export default connect(mapStateToProps)(RootModal)