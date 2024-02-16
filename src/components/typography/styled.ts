import styled from 'styled-components';
import { Keys } from './types';

export const StyledMap = {
  h1: {
    'font-family': 'Fira Sans medium',
    'font-weight': '500',
    'font-size': '32px',
    'line-height': '40px',
    'letter-spacing': '0.25px'
  },
  h2: {
    'font-family': 'Fira Sans medium',
    'font-style': 'normal',
    'font-weight': '500',
    'font-size': '24px',
    'line-height': '32px'
  },
  h3: {
    'font-family': 'Fira Sans medium',
    'font-style': 'normal',
    'font-weight': '500',
    'font-size': '20px',
    'line-height': '28px',
    'letter-spacing': '0.15px'
  },

  h4: {
    'font-family': 'PT Root UI regular',
    'font-style': 'normal',
    'font-weight': '500',
    'font-size': '18px',
    'line-height': '28px',
    'letter-spacing': '0.15px'
  },

  subtitleA: {
    'font-family': 'PT Root UI medium',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '16px',
    'line-height': '24px',
    'letter-spacing': '0.15px'
  },
  subtitleB: {
    'font-family': 'PT Root UI medium',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '14px',
    'line-height': '20px',
    'letter-spacing': '0.15px'
  },
  bodyA: {
    'font-family': 'PT Root UI regular',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '16px',
    'line-height': '24px',
    'letter-spacing': '0.15px'
  },
  bodyB: {
    'font-family': 'PT Root UI regular',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '14px',
    'line-height': '22px',
    'letter-spacing': '0.1px'
  },
  caption: {
    'font-family': 'PT Root UI regular',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '12px',
    'line-height': '20px',
    'letter-spacing': '0.2px'
  },
  overline: {}
};

type Props = {
  cssKey: Keys;
};

export const Component = styled.div<Props>`
    ${({ cssKey }) => cssKey && StyledMap[cssKey]}
    &.color {
        &-primary {
            color: var(--primary-main);
        }

        &-white {
            color: var(--primary-white);
        }
    }
`;
