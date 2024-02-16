import styled, { css } from 'styled-components';
import { IButtonProps } from './types';

const Button = styled.button<IButtonProps>`
    border-radius: 10px;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
            props.primary &&
            css`
                background: var(--primary-main);
                color: var(--grey-0);
            `}

    ${(props) =>
            props.transparent &&
            css`
                background: transparent;
                color: var(--primary-main);
            `}

    ${(props) =>
            props.fullWidth &&
            css`
                width: 100%;
            `}
`;

export default { Button };
