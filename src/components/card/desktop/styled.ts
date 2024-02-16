import styled, { css } from 'styled-components';
import { Typography } from '../../typography';
import { ICardProps, IToastProps } from './types';
import { Button } from '../../button';

export const B = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    align-items: flex-start;
`;

export const STypographyc = styled(Typography)`
    font-family: 'PT Root UI medium' !important;
`;

export const Card = styled.div<ICardProps>`
    position: relative;
    box-shadow: var(--shadow-card);
    background: var(--grey-0);
    border-radius: 12px;
    padding: 24px;
    cursor: pointer;
    display: flex;
    ${({ row }) => (row ? `${Row}` : `${Column}`)};
`;

export const SSliderContainer = styled.div<ICardProps>`
    min-height: 0px;
    min-width: 0px;
    text-align: center;
    margin: ${({ row }) => (row ? `0 24px 0 0 ` : `0 0 24px 0`)};
    min-width: ${({ row }) => (row ? `169px` : `100%`)};
    max-width: ${({ row }) => (row ? `169px` : `100%`)};

    & img {
        width: 80% !important;
        height: 169px !important;
        object-fit: contain;
    }
`;

export const Info = styled.div<ICardProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: ${({ row }) => (row ? `24px` : `0`)};
    ${({ row }) => (row ? `${InfoRow}` : ``)};
`;

export const Type = styled(STypographyc)`
    color: var(--grey-650);
    margin-bottom: 4px;
`;

export const Name = styled(STypographyc)`
    color: var(--grey-850);
    margin-bottom: 4px;
`;

export const Variant = styled(Typography)`
    color: var(--grey-650);
    margin-bottom: 12px;
`;

export const Description = styled.div<ICardProps>`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: var(--grey-700);
    display: ${({ row }) => (row ? `block` : `none`)};
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 4.6em;
`;

export const Price = styled.div<ICardProps>`
    max-width: ${({ row }) => (row ? '248px' : `100%`)};
    min-width: 248px;
    margin-top: ${({ row }) => (row ? '16px' : ``)};
`;

export const InstalmentPay = styled.span`
    padding: 8.5px 25px;
    background: var(--grey-100);
    border-radius: 8px;
    display: inline-block;

    & strong {
        font-family: 'PT ROOT UI bold';
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.15px;
        color: var(--grey-800);
    }

    & span {
        font-family: 'PT Root UI medium';
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.15px;
    }
`;

export const Cost = styled.div<ICardProps>`
    display: flex;
    margin-bottom: ${({ row }) => (row ? '24.5px' : '13.5px')};
    margin-top: ${({ row }) => (row ? '10px' : '8.5px')};
`;

export const CurrentCost = styled(STypographyc)`
    color: #323233;
    margin-right: 8px;
`;

export const NewCost = styled(Typography)`
    color: var(--grey-500);
    position: relative;

    &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: red;
        left: 0;
        right: 10px;
        top: 50%;
        transform: rotate(-5deg) translateY(-50%);
    }
`;

export const AddToCart = styled(Button)`
    padding: 12px 17px;
    cursor: pointer;
    font-family: 'PT ROOT UI bold';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.46px;
    color: var(--grey-0);
    width: 100%;

    & svg {
        margin-right: 14px;
    }
`;

export const Favorites = styled.div<ICardProps>`
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    gap: 23px;
    z-index: 3;
    flex-direction: ${({ row }) => (row ? `row` : `column`)};

    & svg {
        cursor: pointer;
    }
`;

export const ToastsContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 23px;
    left: 23px;
    z-index: 1;
`;

export const ToastContainer = styled.div`
    &:not(:last-child) {
        margin-bottom: 4px;
    }
`;

export const Toast = styled(STypographyc)<IToastProps>`
    display: inline-block;
    padding: 4px 12px;
    color: ${({ type }) => (type === '#FFAE00' ? '#211700' : 'var(--grey-0)')};
    border-radius: 8px;
    background: ${({ type }) => type};
`;

export const Row = css`
    align-items: center;
    min-height: 283px;
`;

export const Column = css`
    flex-direction: column;
    align-items: center;
    min-height: 256px;
`;

export const InfoRow = css`
    max-width: calc(100% - 272px);
    min-width: 400px;
`;

export const FaveBtn = styled(Button)``;

