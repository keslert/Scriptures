import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
const _ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  line-spacing: 1.8em;
`

const _Icon = styled.div`
  font-size: 70px;
  color: ${theme.primary};
`

const ModalBody = ({
  children,
  icon
}) => (
  <_ModalBody>
    {icon ? <_Icon>{icon}</_Icon> : null}
    {children}
  </_ModalBody>
)

export default ModalBody;