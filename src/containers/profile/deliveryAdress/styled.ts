import styled from 'styled-components';
import { mediaQueries } from '../../../core/config/breakpoints';
import { Button } from '../../../components/button';

export const DeliveryAdressWrapper = styled.div``;

export const DeliveryAdressTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px 20px;

    ${mediaQueries('lg')`
    padding: 0;
  `};
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);

    ${mediaQueries('lg')`
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 18px;
  `};
`;

export const AddAdressBtn = styled(Button)`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.46px;
    color: var(--primary-main);

    ${mediaQueries('lg')`
    display: none;
  `};
`;

export const DeliveryAdressListInfo = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ListInfoItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 12px 24px 24px;

    box-shadow: 0px 9px 18px rgba(224, 224, 224, 0.4);
    background: var(--grey-0);
    border-radius: 12px;

    & div:nth-child(1) {
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        color: var(--grey-800);
        margin-bottom: 8px;
    }

    & div:nth-child(2) {
        font-size: 14px;
        line-height: 157%;
        letter-spacing: 0.1px;
        color: var(--grey-700);
    }

    & svg {
        margin-right: 8px;
        min-width: 24px;
    }
`;

export const Cheap = styled.span`
    padding: 2px 8px 2px 24px;
    background: var(--secondary-bg-light);
    border-radius: 8px;
    font-size: 12px;
    line-height: 20px;
    color: var(--primary-dark);
    letter-spacing: 0.2px;
    margin-bottom: 18px;
    max-width: 150px;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background: var(--primary-main);
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const TextContainer = styled.div`
    display: flex;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Icons = styled.div`
    position: absolute;
    top: 12px;
    right: 20px;
    cursor: pointer;
    display: flex;
    gap: 8px;

    & svg {
        margin: 0;
    }
`;
