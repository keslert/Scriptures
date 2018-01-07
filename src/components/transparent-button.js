import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  ${props => `
    color: ${props.color};
    &:hover {
      color: ${props.hoverColor};
    }
  `}
`