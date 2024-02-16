import styled from 'styled-components';
import { IDialogProps } from './types';
import { mediaQueries } from '../../core/config/breakpoints';

export const Dialog = styled.div<IDialogProps>`
    position: fixed;
    inset: 0 0 0 0;
    z-index: 100;
    background: ${({ bg }) => bg || 'rgba(0, 0, 0, 0.3)'};
    transition: transform 0.35s ease;
    transition: opacity 0.35s ease;
    animation: fadein 0.35s ease;
    touch-action: manipulation;

    ${mediaQueries('lg')`
    animation: slideDown 0.35s ease;
    transition: transform 0.35s ease;
    touch-action: none
  `};

    @keyframes slideDown {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(${({ top }) => (top ? top : '0%')});
        }
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: contents;
`;

export const Close = styled.div`
    position: absolute;
    top: 52px;
    right: 115px;
    cursor: pointer;
    z-index: 2;

    ${mediaQueries('lg')`
    top: 34px;
    right: 16px;

    & svg {
      height: 14px;
      width: 14px;
    }
  `};
`;

export const Swipe = styled.div`
    display: none;

    ${mediaQueries('lg')`
    display: block;
    position: absolute;
    left: 0;
    right:0;
    z-index: 2;
    width: 100%;
    height: 12px;
    border-radius: 5px;
    background: var(--grey-0);

    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 4px;
      border-radius: 5px;
      background: var(--grey-200);
    }
  `};
`;
