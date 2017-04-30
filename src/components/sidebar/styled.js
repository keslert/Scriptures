import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  box-shadow: inset 2px 0 6px rgba(0,0,0,0.05);
  background: #f5f5f5;
`

export const StyledTitle = styled.div`
  font-size: 16px;
  padding: 10px;
  text-align: center;
  color: ${theme.secondary};
`;

export const StyledCell = styled.div`
  padding: 10px 15px;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background: rgba(0,0,0,0.04);
  font-size: 0.9em;
  &:hover {
    cursor: pointer;
    background: rgba(0,0,0,0.02);
  }
`;

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