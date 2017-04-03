import React from 'react';

const LogoSVG = ({color}) => (
  <svg width="1em" height="1em" viewBox="0 0 64 63" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect fill={color} x="0" y="18" width="64" height="9"></rect>
      <rect fill={color} x="0" y="36" width="64" height="9"></rect>
      <rect fill={color} x="0" y="54" width="49" height="9"></rect>
      <rect fill={color} x="15" y="0" width="49" height="9"></rect>
    </g>
  </svg>
)

LogoSVG.defaultProps = {
  color: '#F24E5A',
}
export default LogoSVG;