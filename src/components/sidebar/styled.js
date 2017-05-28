import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledSidebar = styled.div`
  position: relative;
  width: 0px;
  height: 100%;
  background: #f5f5f5;
  border-left: 1px solid #f1f1f1;
  transition: width 0.3s;
  ${props => `
    ${props.open && 'width: 220px;'};
    // transform: translate3d(${props.open ? 0 : 220}px, 0, 0);
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