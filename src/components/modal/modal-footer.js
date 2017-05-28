import React from 'react';
import styled from 'styled-components';
import { _SecondaryButton } from '../common/styled-buttons';
import { _Flex } from '../common/styled-flex';
const _ModalFooter = styled.div`
  display: flex;
  padding: 10px 15px;
  background: #f5f5f5;
  border-top: 1px solid #f1f1f1;
`

const _Cancel = styled(_SecondaryButton)`
  color: #808080;
  padding: 8px;
  &:hover {
    color: #999;
  }
`

const ModalFooter = ({
  children,
  onCancel
}) => (
  <_ModalFooter>
    <_Flex><_Cancel onClick={onCancel}>Cancel</_Cancel></_Flex>
    {children}
  </_ModalFooter>
)

export default ModalFooter;