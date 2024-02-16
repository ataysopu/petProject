import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';
import { Typography } from '../typography';

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1232px;
    margin: 0 auto;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */

    ::-webkit-scrollbar-track {
    }

    /* Handle */

    ::-webkit-scrollbar-thumb {
        background: rgba(190, 190, 190, 0.6);
        border-radius: 4px;
    }

    /* Handle on hover */

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(190, 190, 190, 0.6);
    }
`;

export const MenuHeader = styled.div`
    display: flex;
    height: 48px;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom: 1px solid var(--grey-100);

    ${mediaQueries('lg')`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `};
`;

export const MenuTitle = styled(Typography)`
    display: block;
    color: var(--grey-1000);
    width: 100%;
    text-align: center;
    margin-bottom: 11px;
`;

export const PrevStep = styled.div`
    position: absolute;
    left: 32px;
    top: 31px;
    cursor: pointer;
`;

export const Menu = styled.menu`
    position: relative;
    padding: 29px 16px;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 400px;
    width: 100%;
    border-right: solid 1px var(--grey-100);

    ${mediaQueries('lg')`
    max-width: 100%;
  `};
`;

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

export const TopDark = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: -129px;
    height: 40px;
    background: rgba(0, 0, 0, 0.4);

    ${mediaQueries('lg')`
    display: none;
  `};
`;
