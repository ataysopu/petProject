import styled from 'styled-components';
import { Typography } from '../../typography';

export const MenuList = styled.ul`
    display: flex;
    flex-flow: column nowrap;
`;

export const MenuItem = styled.li<{ isActive?: boolean }>`
    width: 100%;
    padding: 8px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    background: ${({ isActive }) => isActive && 'var(--secondary-bg-light)'};
    cursor: pointer;

    &:hover {
        background: var(--secondary-bg-light);

        .icon {
            background: var(--primary-white);
        }
    }

    & svg {
        margin-right: 16px;
    }

    & .icon {
        background: var(${({ isActive }) => (!isActive ? '--secondary-bg-light' : '--primary-white')});
    }
`;

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

export const ProductTypeText = styled(Typography)``;

export const ProductType = styled.div`
    display: flex;
    align-items: center;

    & div {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: var(--grey-1000);
        display: flex;
    }
`;
