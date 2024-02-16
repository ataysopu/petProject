import styled from 'styled-components';
import { Button } from '../../../components/button';

export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Box = styled.div`
    width: 100%;
    height: 396px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
    background: var(--grey-0);
    border-radius: 12px;
    margin-bottom: 40px;

    & div:nth-child(2) {
        margin-top: 16px;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: var(--grey-900);
        margin-bottom: 8px;
    }

    & div:nth-child(3) {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.15px;
        margin-bottom: 24px;
        color: #434344;
        max-width: 340px;
    }
`;

export const GoToMain = styled(Button)`
    background: var(--grey-0);
    color: var(--primary-main);
    border-radius: 12px;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.46px;
    width: 208px;
    height: 48px;
    border: 1px solid var(--primary-bg-dark);
`;

export const ProductList = styled.div``;

export const ListTitle = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: var(--grey-1000);
    margin-bottom: 24px;
`;
