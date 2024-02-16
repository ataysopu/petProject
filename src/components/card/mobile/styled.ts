import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Typography } from '../../typography';
import { IToastProps } from '../desktop/types';
import { Button } from '../../button';

export const Card = styled.div`
    display: flex;
    padding: 16px 16px 20px 16px;
    border-radius: 12px;
    box-shadow: var(--shadow);
`;

export const Image = styled.img`
    display: block;
    margin-right: 12px;
    margin-top: 20px;
    width: 60px;
    height: 60px;

    ${mediaQueries('lg')`
    width: 50px;
    height: 50px;
  `}
`;

export const STypography = styled(Typography)`
    font-family: 'PT Root UI medium' !important;
`;

export const ProductInfo = styled.div``;

export const ToastsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    gap: 4px;
`;

export const Toast = styled(STypography)<IToastProps>`
    padding: 4px 12px;
    color: var(--grey-0);
    border-radius: 8px;
    background: ${({ type }) => type};
`;

export const Type = styled(STypography)`
    color: var(--grey-600);
    margin-bottom: 4px;
`;

export const Name = styled(STypography)`
    color: var(--grey-900);
    margin-bottom: 8px;
`;

export const Variant = styled(STypography)`
    font-size: 12px;
    line-height: 14px;
    color: var(--grey-400);
    letter-spacing: 0.46px;
    margin-bottom: 16px;
`;

export const InstalmentPay = styled.span`
    padding: 4.5px 12px;
    background: var(--grey-100);
    border-radius: 8px;

    & strong {
        font-family: 'PT ROOT UI bold';
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.15px;
        color: var(--grey-800);
    }

    & span {
        font-family: 'PT ROOT UI regular';
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.15px;
    }
`;

export const Cost = styled.div`
    display: flex;
    margin-top: 9.5px;
    margin-bottom: 16px;
`;

export const CurrentCost = styled(STypography)`
    font-size: 14px;
    color: #323233;
    margin-right: 6px;

    ${mediaQueries('lg')`
    margin-right: 6px;
  `}
`;

export const NewCost = styled.div`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: var(--grey-500);
    position: relative;

    ${mediaQueries('lg')`
    margin-right: 6px;
    font-size: 12px;
  `}
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
    font-family: 'PT Root UI bold';
    padding: 12px 17px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.46px;
    color: var(--grey-0);
    width: 100%;
    border-radius: 12px;
    line-height: 16px;

    & svg {
        margin-right: 14px;
    }
`;
