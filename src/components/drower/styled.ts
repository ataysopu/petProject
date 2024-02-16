import styled from 'styled-components';
import { Button } from '../button';
import { LangSwitcher } from '../LangSwitcher';

interface IDrowerProps {
  open: boolean;
}

export const DrowerWrapper = styled.div<IDrowerProps>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    mix-blend-mode: normal;
    backdrop-filter: blur(4px);
    z-index: 2;
    transition: visibility 0.3s linear, opacity 0.3s linear;
    visibility: ${({ open }) => (open ? 'initial' : 'hidden')};
    opacity: ${({ open }) => (open ? '1' : '0')};;
`;

export const DrowerContainer = styled.div<IDrowerProps>`
    width: 299px;
    background: var(--grey-0);
    height: 100%;
    transition: all 0.3s ease-in-out;
    transform: translateX(-100%);
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    position: relative;
    padding: 32px 24px 40px 24px;
`;

export const DrowerHeader = styled.div``;
export const DrowerBody = styled.div``;
export const DrowerFooter = styled.div``;

export const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    margin-bottom: 16px;
`;

export const SigninBtn = styled(Button)`
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.46px;
    color: var(--primary-main);
    border: solid 1px var(--secondary-main);
    padding: 17px 20px;
    border-radius: 16px;

    & svg {
        margin-right: 8px;
    }
`;

export const LinksList = styled.ul`
    margin-bottom: 24px;
    margin-top: 32px;

    & li:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: var(--grey-1000);
    cursor: pointer;
    transition: color fontWeight 0.1s ease-in-out;

    & svg {
        margin-right: 16px;
    }
`;

export const LangSwitch = styled(LangSwitcher)`
    position: absolute;
    bottom: 48px;

    &.footer-lang .dropdownList {
        display: none;
    }
`;

export const NotAccount = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Account = styled.div`
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.46px;
    color: var(--primary-main);
    cursor: pointer;

    & svg {
        margin-right: 8px;
    }
`;
