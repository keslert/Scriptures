import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  0% {
    opacity: 0.2;
    transform: translate3d(0, -6px, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;