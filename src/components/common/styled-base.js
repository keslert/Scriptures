import styled from 'styled-components';

export const StyledScrollable = styled.div`
  overflow-y: auto;
`

export const StyledFlex = styled.div`
  flex: ${props => props.flex || 1};
`

export const StyledMargin = styled.div`
  ${props => `
    ${props.margin && `margin: ${props.margin};`};
    ${props.marginTop && `margin-top: ${props.marginTop};`};
    ${props.marginRight && `margin-right: ${props.marginRight};`};
    ${props.marginBottom && `margin-bottom: ${props.marginBottom};`};
    ${props.marginLeft && `margin-left: ${props.marginLeft};`};
  `};
`;

export const StyledAbsolute = styled.div`
  position: absolute;
  ${props => `
    ${props.top && `top: ${props.top};`};
    ${props.right && `right: ${props.right};`};
    ${props.bottom && `bottom: ${props.bottom};`};
    ${props.left && `left: ${props.left};`};
    ${props.width && `width: ${props.width};`};
    ${props.height && `height: ${props.height};`};
  `};
`;