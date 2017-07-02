import styled from 'styled-components';

export const StyledSidebar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 220px;
  height: 100%;
  background: #f5f5f5;
  border-left: 1px solid #f1f1f1;
  transition: transform 0.3s ease-out;
  ${props => `
    transform: translate3d(${props.open ? 0 : 220}px, 0, 0);
  `};
`

export const StyledAction = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 0.8em;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;