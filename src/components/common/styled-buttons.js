import styled from 'styled-components';
import tinycolor from 'tinycolor2';

export const _Button = styled.a`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  text-align: center;
  border-radius: 2px;
  display: inline-block;
  padding: 3px 8px;
  box-sizing: border-box;
  font-size: 12px;
  cursor: pointer;
  opacity: 0.95;
  &:hover {
    opacity: 1.0;
  }
`;