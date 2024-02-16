import styled from 'styled-components';
import { mediaQueries } from '../../core/config/breakpoints';
import { Button } from '../button';
import { IContentBoxProps } from './types';
import { Typography } from '../typography';

export const FooterCover = styled.footer`
    margin-top: 64px;

    ${mediaQueries('lg')`
    padding: 0 16px;
  `};
`;

export const Container = styled.div`
    max-width: 1232px;
    width: 100%;
    margin: 0 auto;
`;

export const FooterTop = styled.div``;

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 53px;
    background: var(--grey-900);
    border-radius: 24px;

    & > div:not(:last-child) {
        margin-right: 60px;
    }

    ${mediaQueries('lg')`
    flex-direction: column;
    padding: 32px 24px;
    margin-left: -16px;
    margin-right: -16px;
    margin-top: 32px;
    border-radius: 32px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    
    & > div:not(:last-child) {
      margin-right: 0;
    }
  `};
`;

export const Divider = styled.div`
    margin: 16px 0;
    border-bottom: 1px solid var(--grey-200);
    width: 100%;
    display: none;

    ${mediaQueries('lg')`
    display: block;
  `};
`;

export const ContactUsBtn = styled(Button)`
    margin-top: 24px;
    border: 1px solid rgba(152, 143, 219, 0.5);
    border-radius: 10px;
    padding: 12px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.46px;
    border-radius: 10px;
    color: var(--primary-main);
    background-color: transparent;
    width: auto;

    & svg {
        margin-right: 12px;
    }

    ${mediaQueries('lg')`
    width: 100%;
  `};
`;

export const TopContentBox = styled.div<IContentBoxProps>`
    min-width: 180px;
    max-width: 210px;
    width: 100%;

    ${mediaQueries('lg')`
    width: 100%;
    min-width: none;
    max-width: none;

    &:not(:last-child) {
      margin-bottom: 16px;

    }
  `};
`;

export const TopContentBoxTitle = styled(Typography)`
    display: block;
    color: var(--grey-800);
    margin-bottom: 16px;

    & strong {
        display: block;
        color: var(--grey-800);
        margin-bottom: -7px;
    }
`;

export const TopContentBoxList = styled.ul`
    & li {
        margin-bottom: 12px;
    }

    & li a {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: var(--grey-650);
        text-decoration: none;
    }
`;

export const TopContentTypography = styled(Typography)`
    display: block;
    width: 100%;
`;

export const DesktopBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
    padding: 0 53px;

    & > div:not(:last-child) {
        margin-right: 60px;
    }

    ${mediaQueries('lg')`
    flex-direction: column;
    padding: 0;
    display:none;

    & > div:not(:last-child) {
      margin-right: 0;
    }
  `};
`;

export const MobileBox = styled.div`
    display: none;

    ${mediaQueries('lg')`
    display:block;
`};
`;
//black section lists

export const BottomContentBox = styled.div<IContentBoxProps>`
    min-width: 180px;
    max-width: 210px;
    width: 100%;

    ${({ position }) =>
            position === 'bottom' &&
            `
      & div:first-child {
        margin-bottom: 16px;
      }
  `}

    ${mediaQueries('lg')`
    width: 100%;
    min-width: none;
    max-width: none;
    &:not(:last-child) {
      margin-bottom: 24px;
      
    }
  `};
`;

export const BottomContentBoxTitle = styled(Typography)`
    color: var(--grey-200);
    margin-bottom: 20px;
`;

export const BottomContentBoxText = styled(Typography)`
    color: var(--grey-200);

    ${mediaQueries('lg')`
    width: 100%;
    min-width: 1px !important;

    & br {
      display: none;
    }
  `};
`;

export const SocialIconsBox = styled.div`
    & svg:not(:last-child) {
        margin-right: 12px;
    }
`;

export const Empty = styled.div`
    width: 100%;
    min-width: 180px;
    max-width: 210px;
`;

export const AgreementsBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 16px 0;
    padding-left: 53px;

    & a {
        color: var(--grey-800);
        text-decoration: none;
        margin-right: 32px;
    }

    ${mediaQueries('lg')`
    padding: 0;

    & a {
      color: var(--grey-200);
      margin-right: 0;
      margin-bottom: 4px;
      display: block;
      width: 100%;
    }
  `};
`;

export const AgreementDesktop = styled(AgreementsBox)`
    ${mediaQueries('lg')`
    display: none;
  `};
`;

export const AgreementMobile = styled(AgreementDesktop)`
    display: none;

    ${mediaQueries('lg')`
    display: block;
  `};
`;
