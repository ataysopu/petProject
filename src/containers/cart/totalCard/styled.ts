import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Button } from '../../../components/button';

export const Title = styled.h4`
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.25px;
    color: var(--grey-1000);
    margin-bottom: 24px;
`;

export const ContentContainer = styled.div`
    display: flex;
    gap: 16px;
`;

export const List = styled.div`
    max-width: 868px;
    width: 100%;
`;

export const Total = styled.div`
    max-width: 348px;
    width: 100%;

    ${mediaQueries('xl')`
    max-width: 100%;
  `};
`;

export const CheckoutContainer = styled.div`
    padding: 24px;
    background: var(--grey-0);
    box-shadow: var(--shadow);
    border-radius: 12px;
`;

export const CheckoutTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    & div:nth-child(1) {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
    }

    & div:nth-child(2) {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.1px;
        color: var(--grey-600);
    }
`;

export const CheckoutInfo = styled.ul`
    & li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & div:nth-child(1) {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.15px;
            color: var(--grey-600);
        }

        & div:nth-child(2) {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.15px;
            color: var(--grey-800);
        }
    }

    & li:not(:last-child) {
        margin-bottom: 8px;
    }

    & li:last-child {
        height: 1px;
        width: 100%;
        border-bottom: solid 1px var(--grey-100);
        margin: 24px 0;
    }
`;

export const CheckoutTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    & div:nth-child(1) {
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
    }

    & div:nth-child(2) {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
    }
`;

export const Get = styled(Button)`
    width: 100%;
    height: 48px;
    background: var(--primary-main);
    border-radius: 12px;
    color: var(--grey-0);
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.46px;
`;

export const Card = styled.div`
    padding: 32px 40px 24px 24px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    background: var(--grey-0);
    display: flex;
    position: relative;
`;

export const LeftSide = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;

    & img {
        width: 140px;
        height: 140px;
        margin-left: 30px;
    }
`;

export const Check = styled.div`
    position: absolute;
    top: 40px;
    left: 24px;
`;

export const Desc = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.div`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: var(--grey-900);
`;

export const Config = styled.ul`
    & li {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.1px;
        color: var(--grey-600);

        &:not(:last-child) {
            margin-bottom: 2px;
        }
    }
`;

export const Vendor = styled.div`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: var(--grey-800);
    margin-top: 16px;
`;

export const RightSide = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`;

export const CountController = styled.div`
    width: 128px;
    height: 48px;
    border-radius: 8px;
    border: 2px solid var(--secondary-main);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    margin-right: 21px;
`;

export const Remove = styled(Button)`
    position: relative;
    width: 12px;
    height: 12px;

    &::after,
    &::before {
        position: absolute;
        content: '';
        background: var(--primary-main);
        border-radius: 2px;
    }

    &::after {
        width: 12px;
        height: 1.5px;
    }
`;

export const Add = styled(Remove)`
    &::before {
        width: 12px;
        height: 1.5px;
        transform: rotate(90deg) translate(0px, -0.5px);
    }

    &::after {
        width: 12px;
        height: 1.5px;
    }
`;

export const Count = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
`;

export const PriceInfo = styled.div`
    text-align: right;

    & div:nth-child(1) {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.15px;
        color: var(--grey-900);
        text-align: right;
    }

    & div:nth-child(2) {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.1px;
        color: var(--grey-500);
        position: relative;
        text-align: right;
        display: inline-block;

        &::after {
            content: '';
            position: absolute;
            height: 1px;
            left: 0;
            top: 10px;
            right: 10px;
            transform: rotate(-7deg);
            background: var(--error-main);
        }
    }

    & div:nth-child(3) {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.15px;
        color: var(--primary-main);
        margin-top: 12px;
    }
`;

export const FavesContainer = styled.div`
    position: absolute;
    right: 30px;
    bottom: 0;
`;
