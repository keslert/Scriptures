import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modalActions } from '../../../core/modal';

import Modal from 'react-modal';
import ModalBody from '../modal-body';
import { defaultStyles } from '../modal-styles';

import Icon from 'react-icons/lib/md/content-cut';
import { _Button } from '../../common/styled-buttons';
import theme from '../../../styles/theme';


class BookmarkRenameModal extends React.Component {

  render() {

    const { hideModal } = this.props;

    return (
      <Modal 
        isOpen={true} 
        contentLabel={"Upload Chart"} 
        onRequestClose={hideModal} 
        style={defaultStyles}
        shouldCloseOnOverlayClick={false}
        >

        <ModalBody icon={<Icon />}>
          <h2>Preparing Chart</h2> 
        </ModalBody>
      </Modal>
    )
  }
}

const mapDispatchToProps = Object.assign({}, modalActions)

export default connect(undefined, mapDispatchToProps)(BookmarkRenameModal);