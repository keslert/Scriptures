import React from 'react';
import styled from 'styled-components';
import { Button } from 'rebass';
import { _Flex } from '../common/styled-flex';

const SModalFooter = styled.div`
  display: flex;
  padding: 10px 15px;
  background: #f5f5f5;
  border-top: 1px solid #f1f1f1;
`

const CancelButton = styled(Button)`
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
  <SModalFooter>
    <_Flex><CancelButton onClick={onCancel}>Cancel</CancelButton></_Flex>
    {children}
  </SModalFooter>
)

export default ModalFooter;