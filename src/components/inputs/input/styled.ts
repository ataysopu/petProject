import styled, { css } from 'styled-components';
import { IFormInputProps } from './types';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: var(--bg);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const Label = styled.label`
    color: var(--text-secondary);
    font-size: 16px;
    font-weight: 100;
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    left: 19px;
`;

export const InputField = styled.input<IFormInputProps>`
    border: none;
    display: block;
    width: 100%;
    height: 56px;
    color: var(--grey-800);
    letter-spacing: 0.15px;
    font-size: 16px;
    line-height: 19px;
    padding: 0 16px;
    background: transparent;

    &:disabled {
        background: var(--grey-100) !important;
    }

    :not(:placeholder-shown) + ${Label}, :read-only + ${Label}, input:focus {
        outline: none;
    }

    :not(:placeholder-shown) + ${Label}, input:read-only + ${Label}, input:focus + ${Label} {
        font-size: 12px;
        line-height: 14px;
        top: 14px;
    }

    :focus + ${Label}, input:read-only + ${Label}, input:focus + ${Label} {
        font-size: 12px;
        line-height: 14px;
        top: 14px;
    }

    ${(props) =>
            props.err &&
            css`
                border: solid 1px var(--error-main) !important;
            `}
`;

export const InputErrText = styled.div`
    color: var(--error-main);
    padding-left: 12px;
    margin-top: 8px;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const IconsContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-grow: 8px;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    padding-right: 16px;
`;
