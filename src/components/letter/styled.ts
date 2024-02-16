import styled from 'styled-components';
import { ILetterProps } from './types';

export const Letter = styled.span<ILetterProps>`
    position: relative;
    display: inline-block;
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
    font-family: inherit;
    letter-spacing: inherit;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: ${({ mb }) => (mb !== undefined ? `${mb + 'px'}` : '4px')};
        height: 1px;
        background: currentColor;
        z-index: 1;
    }
`;
