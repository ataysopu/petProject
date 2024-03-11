import styled, { css } from 'styled-components';
import { ISearchContainerProps } from './types';
import { mediaQueries } from '../../core/config/breakpoints';
import { Typography } from '../typography';
import { Button } from '../button';
import { LangSwitcherModal } from '../LangSwitcher';

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    background: #fafafa;
    z-index: 10;
`;

export const Container = styled.div`
    max-width: 1232px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
`;

export const HeaderTop = styled.div<ISearchContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    opacity: 1;
    visibility: initial;
    max-height: 130px;
    transition: all 0.3s ease-out;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    ${({ hidden }) => hidden && `${FadeIn}`}

    ${mediaQueries('lg')`
      display: none;
    `};
`;

export const HeaderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    ${mediaQueries('lg')`
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  `};
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    ${mediaQueries('lg')`
    flex-direction: row-reverse;
    
  `};

    & .dropdownList {
        border: none;
        box-shadow: 0px 3px 18px rgba(204, 204, 204, 0.4);
    }
`;

export const MobileMenuContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 34px;
    display: none;

    ${mediaQueries('lg')`
    display: flex;
    margin-bottom: 0;
    height: 64px;
  `};
`;

export const DesktopLogoCover = styled.div`
    display: block;

    ${mediaQueries('lg')`
    display: none;
  `};
`;

export const GetAppButton = styled(Button)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: var(--grey-600);
    letter-spacing: 0.46px;
    margin-right: 16px;

    & svg {
        margin-right: 8px;
    }

    ${mediaQueries('lg')`
    display: none
  `};
`;

export const TopButtonTypography = styled(Typography)`
    color: var(--grey-600);
`;

export const ContactUs = styled(Button)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 38px;

    & svg {
        margin-right: 8px;
    }

    ${mediaQueries('lg')`
    & svg {
      display: none;
    }
  `};
`;

export const CatalogButton = styled(Button)`
    padding: 18px 22px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 34px;
    margin-right: 16px;
    border-radius: 16px;

    & svg {
        margin-right: 14px;
    }

    ${mediaQueries('lg')`
    margin: 0;
    padding: 16px;
    border-radius: 12px;

    & svg {
      margin: 0;
    }

    & span {
      display: none;
    }
  `};
`;

export const CatalogButtonTypography = styled.span`
    font-family: 'PT ROOT UI bold';
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.46px;
    color: var(--grey-0);
`;

export const GoodsAuthContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 64px;
    gap: 16px;

    ${mediaQueries('lg')`
    display: none
  `};

    & button {
        width: 48px;
        height: 48px;
    }
`;

export const HeaderBtnsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const CartHeaderBtn = styled(Button)``;

export const SearchContainer = styled.div<ISearchContainerProps>`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    max-height: 56px;
    display: flex;
    opacity: 1;
    visibility: initial;
    transition: all 0.3s ease-out;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    ${({ hidden }) =>
            hidden &&
            `
        ${FadeIn}
    `}
}

${mediaQueries('lg')`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    position: relative;
    padding: 0 0 12px 0;
  `}
`;

export const DrowerLangModal = styled(LangSwitcherModal)``;

// ANIMATION
const FadeIn = css`
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
    max-height: 0;
    padding: 0 !important;
`;
