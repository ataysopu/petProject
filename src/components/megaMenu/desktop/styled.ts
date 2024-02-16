import styled from 'styled-components';
import { Typography } from '../../typography';

export const Icon = styled.div`
    background: transparent;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    & img {
        height: 100%;
        width: 100%;
        object-fit: scale-down;
    }
`;

export const Destop = styled.div`
    width: 100%;
`;

export const DestopMenu = styled.div`
    margin: 48px 64px;
`;

export const DestopMenuList = styled.div`
    &.desktop-menu__list {
        display: grid;
        grid-gap: 32px 50px;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const DestopMenuItemBlock = styled.div`
    max-width: 320px;
    width: 100%;
    height: 200px;
    display: flex;
`;

export const DestopMenuItem = styled.div`
    &.link {
        cursor: pointer;
    }
`;

export const DestopMenuItemTitle = styled(Typography)`
    color: var(--grey-850);
    padding-bottom: 12px;
`;

export const DestopMenuItemMainTitle = styled(Typography)`
    font-weight: 400;
    margin-bottom: 16px;
    color: var(--grey-850);
`;
