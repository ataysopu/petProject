import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuLeft = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    & div:nth-child(1) {
        color: var(--grey-800);
    }

    & div:nth-child(2) {
        color: var(--grey-600);

        span {
            font-size: 12px;
            line-height: 166%;
            letter-spacing: 0.2px;
            color: var(--error-main);
        }
    }
`;

export const MenuRight = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: 0.15px;
        color: #111111;
        margin-right: 23px;
    }
`;

export const MenuButton = styled(Link)`
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.46px;

    text-decoration: none;
    padding: 15px 18px;
    border-radius: 12px;
    color: var(--grey-0);
    background: var(--primary-main);
`;

interface IMenu {
  isSticky?: boolean;
}

export const Menu = styled.div<IMenu>`
    position: sticky;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const MenuWrap = styled.div`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.15px;
    margin: 0 24px;
    display: flex;
    justify-content: space-between;

    background: var(--grey-0);
    box-shadow: 0px 0px 9px rgba(66, 66, 66, 0.16);
    border-radius: 12px;
`;