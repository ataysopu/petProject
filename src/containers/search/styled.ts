import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';

export const InputWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-100);
    border-radius: 10px;
    padding: 4px;
    padding-left: 16px;
    height: 56px;

    ${mediaQueries('lg')`
      height: 48px;
      padding: 0;
      padding-left: 12px;
      margin-right: 21px;

      & svg {
          display: none;
      }
  `};
`;

export const Input = styled.input`
    font-family: 'PT Root UI regular';
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.15px;
    display: block;
    flex: 1;
    border: none;
    background: transparent;

    &::placeholder {
        color: var(--grey-400);
    }

    ${mediaQueries('lg')`
    padding: 11px 0;
    font-size: 13px;
  `};
`;
